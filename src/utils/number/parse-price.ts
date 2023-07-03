import { Currency, Price } from "@uniswap/sdk-core";

export const parsePriceFloat = (
  price: Price<Currency, Currency> | undefined
) => {
  if (!price) return undefined;
  const floatNumber = parseFloat(price.toFixed(9));
  return floatNumber < 0.1 ? parseFloat(price.toSignificant(6)) : floatNumber;
};
