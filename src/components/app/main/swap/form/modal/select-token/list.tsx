import clsx from "clsx";

import { CheckSvg } from "@/assets/svgs";
import { CurrencyLogo } from "@/components/global/logo";
import { BaseCurrency } from "@/constants/base";

interface CurrencyRowProps extends BaseCurrency {
  disabled?: boolean;
  onClick: () => void;
}

const CurrencyRow = ({ name, symbol, disabled, onClick }: CurrencyRowProps) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={clsx([
        "flex h-14 items-center gap-4 px-5 py-1 hover:bg-[#98A1C014]",
        disabled
          ? "pointer-events-none cursor-default opacity-40"
          : "cursor-pointer",
      ])}
    >
      <div>
        <CurrencyLogo size="36px" currency={symbol} />
      </div>
      <div className="flex grow flex-col">
        <div>{name}</div>
        <div className="text-xs font-light text-[#5D6785]">{symbol}</div>
      </div>
      {disabled && <CheckSvg className="h-5 w-5 text-[#4C82FB]" />}
    </div>
  );
};

interface CurrencyListProps {
  currencies: Array<BaseCurrency>;
  selectedCurrency: string | null;
  onSelectCurrency: (currency: string) => void;
}

export const CurrencyList = ({
  currencies,
  selectedCurrency,
  onSelectCurrency,
}: CurrencyListProps) => {
  if (currencies.length === 0) {
    return (
      <div className="h-full p-5 text-center">
        <span>No results found</span>
      </div>
    );
  }

  return (
    <div className="h-full">
      {currencies.map((currency) => (
        <CurrencyRow
          key={currency.symbol}
          onClick={() => onSelectCurrency(currency.symbol)}
          disabled={selectedCurrency === currency.symbol}
          {...currency}
        />
      ))}
    </div>
  );
};
