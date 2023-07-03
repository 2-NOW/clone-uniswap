import { CurrencyAmount, Currency } from "@uniswap/sdk-core";
import useSWR from "swr";

import { useDebounce } from "./useDebounce";

import { requestQuote } from "@/api/fetcher";
import { REQUEST_QUOTE } from "@/api/url";
import { getCurrencyAddress } from "@/constants/tokens";
import { InterfaceTrade, QuoteMethod } from "@/libs/route/types";

const DEBOUNCE_TIME = 350;

export enum TradeType {
  EXACT_INPUT = "EXACT_INPUT",
  EXACT_OUTPUT = "EXACT_OUTPUT",
}

export const useBestTrade = (
  tradeType: TradeType,
  amount?: CurrencyAmount<Currency>,
  otherCurrency?: Currency
): {
  isLoading: boolean;
  trade?: InterfaceTrade;
  method?: QuoteMethod;
} => {
  const [_amount, _otherCurrency] = useDebounce(
    [amount, otherCurrency],
    DEBOUNCE_TIME
  );

  const [currencyIn, currencyOut] =
    tradeType === TradeType.EXACT_INPUT
      ? [_amount?.currency, _otherCurrency]
      : [_otherCurrency, _amount?.currency];

  const fetchArgs = {
    type: tradeType,
    amount: _amount?.quotient.toString(),
    tokenInChainId: _amount?.currency.wrapped.chainId,
    tokenIn: currencyIn ? getCurrencyAddress(currencyIn) : undefined,
    tokenOutChainId: _otherCurrency?.wrapped.chainId,
    tokenOut: currencyOut ? getCurrencyAddress(currencyOut) : undefined,
    configs: [
      {
        protocols: ["V2", "V3", "MIXED"],
        routingType: "CLASSIC",
      },
    ],
  };

  const isReady = Object.values(fetchArgs).every(
    (arg) => arg != null && arg != undefined
  );

  const { data, isLoading } = useSWR(
    !isReady ? null : { url: REQUEST_QUOTE, args: fetchArgs },
    requestQuote
  );

  return {
    isLoading,
    trade: data?.trade,
    method: data?.method,
  };
};
