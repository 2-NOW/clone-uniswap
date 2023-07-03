import { TradeType } from "@uniswap/sdk-core";

import { REQUEST_QUOTE } from "./url";

import { transformRoutesToTrade } from "@/libs/route";
import { QuoteDataV2 } from "@/libs/route/types";

type RequestQuoteArgs = {
  type: TradeType;
  amount: string;
  tokenInChainId: number;
  tokenIn: string;
  tokenOutChainId: number;
  tokenOut: string;
  configs: {
    protocols: string[];
    routingType: string;
  }[];
};

type RequestQuoteParams = {
  url: typeof REQUEST_QUOTE;
  args: RequestQuoteArgs;
};

export const requestQuote = async ({ url, args }: RequestQuoteParams) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(args),
  });
  const data = (await response.json()) as QuoteDataV2;
  const transformArgs = {
    tokenInAddress: args.tokenIn,
    tokenOutAddress: args.tokenOut,
    tradeType: args.type,
  };

  const result = transformRoutesToTrade(transformArgs, data.quote);
  return result;
};
