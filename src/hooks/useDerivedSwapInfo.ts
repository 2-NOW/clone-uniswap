import { TradeType, useBestTrade } from "./useBestTrade";

import { Field, SwapState } from "@/components/app/main/swap/form";
import { getCurrency } from "@/constants/tokens";
import { parseCurrencyAmount } from "@/utils/parse";

export const useDerivedSwapInfo = (state: SwapState) => {
  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = state;

  const [inputCurrency, outputCurrency] = [
    getCurrency(inputCurrencyId),
    getCurrency(outputCurrencyId),
  ];
  const dependentField =
    independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT;

  const currencies = {
    [Field.INPUT]: inputCurrency,
    [Field.OUTPUT]: outputCurrency,
  };

  const parsedAmount = parseCurrencyAmount(
    typedValue,
    currencies[independentField]
  );

  const tradeType =
    independentField === Field.INPUT
      ? TradeType.EXACT_INPUT
      : TradeType.EXACT_OUTPUT;

  const trade = useBestTrade(
    tradeType,
    parsedAmount,
    currencies[dependentField] ?? undefined
  );

  return {
    parsedAmount,
    currencies,
    trade,
  };
};
