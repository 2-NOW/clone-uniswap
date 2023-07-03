import { Currency, CurrencyAmount } from "@uniswap/sdk-core";

export const parseCurrencyAmount = (amount?: CurrencyAmount<Currency>) => {
  if (!amount) return undefined;
  const floatNumber = parseFloat(amount.toExact());
  return floatNumber < 0.1 ? parseFloat(amount.toSignificant(6)) : floatNumber;
};
