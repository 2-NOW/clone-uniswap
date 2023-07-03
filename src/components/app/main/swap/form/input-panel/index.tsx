import { Currency, NativeCurrency, Token } from "@uniswap/sdk-core";
import bn from "bignumber.js";
import { InputHTMLAttributes } from "react";

import { SelectTokenModal } from "../modal/select-token";

import { CurrencySelect } from "./currency-select";
import { SwapFormInput } from "./input";

import { getFiatValue } from "@/constants/fiat";
import { useModal } from "@/hooks/useModal";
import { toLocaleString } from "@/utils/number/format-locale";
import { pureNumber } from "@/utils/number/pure";

interface FiatPriceProps {
  amount: string;
  currency: Currency | null;
}

const FiatPrice = ({ amount, currency }: FiatPriceProps) => {
  const fiatPrice = getFiatValue(currency);
  const _amount = pureNumber(amount);

  if (!_amount) return null;
  return (
    <span className="pt-2 text-sm">
      ${toLocaleString(bn(_amount).times(fiatPrice).toNumber())}
    </span>
  );
};

interface SwapFormInputPanelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  currency: Currency | null;
  onSelectCurrency: (currency: NativeCurrency | Token) => void;
}

export const SwapFormInputPanel = ({
  value,
  currency,
  onSelectCurrency,
  ...props
}: SwapFormInputPanelProps) => {
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
      value={value}
      {...props}
      right={
        <CurrencySelect onClick={handleCurrencyClick} currency={currency} />
      }
      bottom={<FiatPrice amount={value} currency={currency} />}
    />
  );
};
