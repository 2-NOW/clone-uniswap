import { Currency, CurrencyAmount } from "@uniswap/sdk-core";
import { parseUnits } from "ethers/lib/utils";
import JSBI from "jsbi";

export const parseCurrencyAmount = <C extends Currency>(
  amount: string,
  currency: C | null
): CurrencyAmount<C> | undefined => {
  if (!currency || !amount) return undefined;
  const typedValueParsed = parseUnits(amount, currency.decimals).toString();
  return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed));
};
