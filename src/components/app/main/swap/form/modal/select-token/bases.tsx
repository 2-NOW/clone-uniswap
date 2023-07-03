import { Currency, NativeCurrency, Token } from "@uniswap/sdk-core";
import clsx from "clsx";

import { CurrencyLogo } from "@/components/global/logo";
import { getBaseCurrencies } from "@/constants/base";
import { SupportedChainId } from "@/constants/tokens";
import { Chain } from "@/state/chain";

interface CurrencyBadgeProps {
  currency: NativeCurrency | Token;
  selected: boolean;
  onClick: () => void;
}

const CurrencyBadge = ({
  currency: { symbol },
  selected,
  onClick,
}: CurrencyBadgeProps) => {
  return (
    <div
      onClick={!selected ? onClick : undefined}
      className={clsx([
        "m-1 flex items-center rounded-2xl border p-1.5 pr-3 hover:bg-[#98A1C014]",
        selected
          ? "cursor-default border-[#4C82FB] text-[#4C82FB]"
          : "cursor-pointer border-[#98A1C03d]",
      ])}
    >
      <div className="mr-2">
        <CurrencyLogo size="24px" symbol={symbol} />
      </div>
      <div>{symbol}</div>
    </div>
  );
};

interface BaseCurrencyListProps {
  chain: Chain;
  currency: Currency | null;
  onSelectCurrency: (currency: NativeCurrency | Token) => void;
}

export const BaseCurrencyList = ({
  chain,
  currency,
  onSelectCurrency,
}: BaseCurrencyListProps) => {
  const bases = getBaseCurrencies(SupportedChainId.MAINNET);

  return (
    <div className="-m-1 flex flex-wrap items-center justify-start gap-1">
      {bases &&
        bases.map((base) => (
          <CurrencyBadge
            onClick={() => onSelectCurrency(base)}
            key={`badge-${base.symbol}-${base.name}-${chain}`}
            currency={base}
            selected={currency === base}
          />
        ))}
    </div>
  );
};
