import { InputHTMLAttributes } from "react";

import { SelectTokenModal } from "../modal/select-token";

import { CurrencySelect } from "./currency-select";
import { SwapFormInput } from "./input";

import { useModal } from "@/hooks/useModal";

interface SwapFormInputPanelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  currency: string | null;
  onSelectCurrency: (currency: string) => void;
}

export const SwapFormInputPanel = ({
  currency,
  onSelectCurrency,
  ...props
}: SwapFormInputPanelProps) => {
  // TODO: bottom to currency info (fiat value, balance, etc.)
  const { modal } = useModal();

  const handleCurrencyClick = async () => {
    const selectedCurrency = await modal(
      <SelectTokenModal selectedCurrency={currency} />
    );
    if (selectedCurrency) onSelectCurrency(selectedCurrency);
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
