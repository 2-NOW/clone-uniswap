import { CurrencySelect } from "../currency-select";
import { SwapFormInput } from "../input";
import { SelectTokenModal } from "../modal/select-token";

import { useModal } from "@/hooks/useModal";

interface SwapFormInputPanelProps {
  currency: string | null;
  onSelectCurrency: (currency: string) => void;
}

export const SwapFormInputPanel = ({
  currency,
  onSelectCurrency,
}: SwapFormInputPanelProps) => {
  // TODO: how to handle token modal chain ?
  const { modal } = useModal();

  const handleCurrencyClick = async () => {
    const selectedCurrency = await modal(
      <SelectTokenModal chain="ETH" selectedCurrency={currency} />
    );
    if (selectedCurrency) onSelectCurrency(selectedCurrency);
  };

  return (
    <SwapFormInput
      right={
        <CurrencySelect onClick={handleCurrencyClick} currency={currency} />
      }
    />
  );
};
