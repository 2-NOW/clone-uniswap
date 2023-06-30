import { BaseCurrency } from "@/constants/base";

const CurrencyRow = ({ name, symbol }: BaseCurrency) => {
  return (
    <div className="px-5 py-1">
      <div className="flex flex-col">
        <div>{name}</div>
        <div>{symbol}</div>
      </div>
    </div>
  );
};

interface CurrencyListProps {
  currencies: Array<BaseCurrency>;
}

export const CurrencyList = ({ currencies }: CurrencyListProps) => {
  // TODO: no result found
  return (
    <div className="h-full">
      {currencies.map((currency) => (
        <CurrencyRow key={currency.symbol} {...currency} />
      ))}
    </div>
  );
};
