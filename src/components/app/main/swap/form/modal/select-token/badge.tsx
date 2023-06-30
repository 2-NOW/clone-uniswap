import clsx from "clsx";

import { getBaseCurrencies } from "@/constants/base";
import { getLogoSrc } from "@/constants/logo";

interface CurrencyBadgeProps {
  currency: string;
  selected: boolean;
}

const CurrencyBadge = ({ currency, selected }: CurrencyBadgeProps) => {
  const logoSrc = getLogoSrc(currency);

  return (
    <div
      className={clsx([
        "m-1 flex items-center rounded-2xl border p-1.5 pr-3 hover:bg-[#98A1C014]",
        selected
          ? "border-[#4C82FB] text-[#4C82FB]"
          : "cursor-pointer border-[#98A1C03d]",
      ])}
    >
      <div className="mr-2">
        {logoSrc ? (
          <img
            className="h-6 w-6 rounded-full"
            alt={`${currency} logo`}
            src={logoSrc}
          />
        ) : (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
            <span className="text-xl font-semibold">{currency[0]}</span>
          </div>
        )}
      </div>
      <div>{currency}</div>
    </div>
  );
};

interface BaseCurrencyListProps {
  chain: string;
  selectedCurrency: string | null;
}

export const BaseCurrencyList = ({
  chain,
  selectedCurrency,
}: BaseCurrencyListProps) => {
  const bases = getBaseCurrencies(chain);

  return (
    <div className="-m-1 flex flex-wrap items-center justify-start gap-1">
      {bases &&
        bases.map(({ symbol }) => (
          <CurrencyBadge
            key={`badge-${symbol}`}
            currency={symbol}
            selected={selectedCurrency === symbol}
          />
        ))}
    </div>
  );
};
