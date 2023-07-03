import { Currency, NativeCurrency, Token } from "@uniswap/sdk-core";
import { InputHTMLAttributes } from "react";

import { SelectTokenModal } from "../modal/select-token";

import { CurrencySelect } from "./currency-select";
import { SwapFormInput } from "./input";

import { useModal } from "@/hooks/useModal";

interface SwapFormInputPanelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  currency: Currency | null;
  onSelectCurrency: (currency: NativeCurrency | Token) => void;
}

export const SwapFormInputPanel = ({
  currency,
  onSelectCurrency,
  ...props
}: SwapFormInputPanelProps) => {
  // TODO: bottom to currency info (fiat value, balance, etc.)
  const { modal } = useModal();

  const handleCurrencyClick = async () => {
    modal(
      <SelectTokenModal
        currency={currency}
        onSelectCurrency={onSelectCurrency}
      />
    );
  };

  return (
    <SwapFormInput
      {...props}
      right={
        <CurrencySelect onClick={handleCurrencyClick} currency={currency} />
      }
    />
  );
};
