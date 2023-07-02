import clsx from "clsx";

import { CurrencyLogo } from "@/components/global/logo";
import { getBaseCurrencies } from "@/constants/base";
import { Chain } from "@/state/chain";

interface CurrencyBadgeProps {
  currency: string;
  selected: boolean;
  onClick: () => void;
}

const CurrencyBadge = ({ currency, selected, onClick }: CurrencyBadgeProps) => {
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
        <CurrencyLogo size="24px" currency={currency} />
      </div>
      <div>{currency}</div>
    </div>
  );
};

interface BaseCurrencyListProps {
  chain: Chain;
  selectedCurrency: string | null;
  onSelectCurrency: (currency: string) => void;
}

export const BaseCurrencyList = ({
  chain,
  selectedCurrency,
  onSelectCurrency,
}: BaseCurrencyListProps) => {
  const bases = getBaseCurrencies(chain);

  return (
    <div className="-m-1 flex flex-wrap items-center justify-start gap-1">
      {bases &&
        bases.map(({ symbol }) => (
          <CurrencyBadge
            onClick={() => onSelectCurrency(symbol)}
            key={`badge-${symbol}`}
            currency={symbol}
            selected={selectedCurrency === symbol}
          />
        ))}
    </div>
  );
};
