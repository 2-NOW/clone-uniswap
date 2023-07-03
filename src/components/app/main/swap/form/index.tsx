import { Currency } from "@uniswap/sdk-core";
import { useState } from "react";

import { SwapButton } from "./button";
import { SwapInfo } from "./info";
import { SwapFormInputPanel } from "./input-panel";
import { SwitchInput } from "./switch";

import { useDerivedSwapInfo } from "@/hooks/useDerivedSwapInfo";
import { formatNumber } from "@/utils/format-number";
import { currencyAmountPrecision } from "@/utils/precise";

export enum Field {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

export type SwapState = {
  independentField: Field;
  typedValue: string;
  [Field.INPUT]: {
    currencyId: string | null;
  };
  [Field.OUTPUT]: {
    currencyId: string | null;
  };
};

const initialState: SwapState = {
  independentField: Field.INPUT,
  typedValue: "",
  [Field.INPUT]: {
    currencyId: "ETH",
  },
  [Field.OUTPUT]: {
    currencyId: null,
  },
};

export const SwapForm = () => {
  const [inputState, setInputCurrency] = useState<SwapState>(initialState);

  const { independentField, typedValue } = inputState;

  const dependentField =
    independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT;

  const {
    currencies,
    parsedAmount,
    trade: { isLoading, trade },
  } = useDerivedSwapInfo(inputState);

  const parsedAmounts = {
    [Field.INPUT]:
      independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
    [Field.OUTPUT]:
      independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
  };

  const formattedAmount = {
    [independentField]: typedValue,
    [dependentField]: formatNumber(
      currencyAmountPrecision(parsedAmounts[dependentField])
    ),
  };

  const handleSwitchCurrency = () => {
    setInputCurrency((prev) => ({
      ...prev,
      independentField:
        prev.independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT,
      [Field.INPUT]: {
        currencyId: prev[Field.OUTPUT].currencyId,
      },
      [Field.OUTPUT]: {
        currencyId: prev[Field.INPUT].currencyId,
      },
    }));
  };

  const handleSelect = (currency: Currency, field: Field) => {
    const otherField = field === Field.INPUT ? Field.OUTPUT : Field.INPUT;

    setInputCurrency((prev) => {
      if (prev[otherField].currencyId === currency.symbol) {
        return {
          ...prev,
          independentField: field,
          [field]: { currencyId: currency.symbol },
          [otherField]: { currencyId: prev[field].currencyId },
        };
      }
      return { ...prev, [field]: { currencyId: currency.symbol } };
    });
  };

  const handleTypeInput = (value: string, field: Field) => {
    setInputCurrency((prev) => ({
      ...prev,
      independentField: field,
      typedValue: value,
    }));
  };

  const showDetailsDropdown = !!trade || isLoading;

  return (
    <form>
      <SwapFormInputPanel
        value={formattedAmount[Field.INPUT]}
        onChange={(e) => handleTypeInput(e.target.value, Field.INPUT)}
        currency={currencies[Field.INPUT]}
        onSelectCurrency={(currency) => handleSelect(currency, Field.INPUT)}
      />
      <SwitchInput onClick={handleSwitchCurrency} />
      <div className="flex flex-col gap-1">
        <SwapFormInputPanel
          value={formattedAmount[Field.OUTPUT]}
          onChange={(e) => handleTypeInput(e.target.value, Field.OUTPUT)}
          currency={currencies[Field.OUTPUT]}
          onSelectCurrency={(currency) => handleSelect(currency, Field.OUTPUT)}
        />
        {showDetailsDropdown && <SwapInfo loading={true} trade={trade} />}
        <SwapButton />
      </div>
    </form>
  );
};
