import { MixedRouteSDK, Trade } from "@uniswap/router-sdk";
import { Currency, CurrencyAmount, Token, TradeType } from "@uniswap/sdk-core";
import { Route as V2Route } from "@uniswap/v2-sdk";
import { Route as V3Route } from "@uniswap/v3-sdk";

type TokenInRoute = Pick<Token, "address" | "chainId" | "symbol" | "decimals">;

export type V3PoolInRoute = {
  type: "v3-pool";
  tokenIn: TokenInRoute;
  tokenOut: TokenInRoute;
  sqrtRatioX96: string;
  liquidity: string;
  tickCurrent: string;
  fee: string;
  amountIn?: string;
  amountOut?: string;

  // not used in the interface
  address?: string;
};

type V2Reserve = {
  token: TokenInRoute;
  quotient: string;
};

export type V2PoolInRoute = {
  type: "v2-pool";
  tokenIn: TokenInRoute;
  tokenOut: TokenInRoute;
  reserve0: V2Reserve;
  reserve1: V2Reserve;
  amountIn?: string;
  amountOut?: string;

  // not used in the interface
  // avoid returning it from the client-side smart-order-router
  address?: string;
};

export enum PoolType {
  V2Pool = "v2-pool",
  V3Pool = "v3-pool",
}

export interface QuoteData {
  quoteId?: string;
  blockNumber: string;
  amount: string;
  amountDecimals: string;
  gasPriceWei: string;
  gasUseEstimate: string;
  gasUseEstimateQuote: string;
  gasUseEstimateQuoteDecimals: string;
  gasUseEstimateUSD: string;
  methodParameters?: { calldata: string; value: string };
  quote: string;
  quoteDecimals: string;
  quoteGasAdjusted: string;
  quoteGasAdjustedDecimals: string;
  route: Array<(V3PoolInRoute | V2PoolInRoute)[]>;
  routeString: string;
}

export class ClassicTrade<
  TInput extends Currency,
  TOutput extends Currency,
  TTradeType extends TradeType
> extends Trade<TInput, TOutput, TTradeType> {
  gasUseEstimateUSD: string | null | undefined;
  blockNumber: string | null | undefined;

  constructor({
    gasUseEstimateUSD,
    blockNumber,
    ...routes
  }: {
    gasUseEstimateUSD?: string | null;
    blockNumber?: string | null;
    v2Routes: {
      routev2: V2Route<TInput, TOutput>;
      inputAmount: CurrencyAmount<TInput>;
      outputAmount: CurrencyAmount<TOutput>;
    }[];
    v3Routes: {
      routev3: V3Route<TInput, TOutput>;
      inputAmount: CurrencyAmount<TInput>;
      outputAmount: CurrencyAmount<TOutput>;
    }[];
    tradeType: TTradeType;
    mixedRoutes?: {
      mixedRoute: MixedRouteSDK<TInput, TOutput>;
      inputAmount: CurrencyAmount<TInput>;
      outputAmount: CurrencyAmount<TOutput>;
    }[];
  }) {
    super(routes);
    this.blockNumber = blockNumber;
    this.gasUseEstimateUSD = gasUseEstimateUSD;
  }
}

enum ChainId {
  MAINNET = 1,
}

enum RouterPreference {
  AUTO = "auto",
  API = "api",
  CLIENT = "client",
}

const INTERNAL_ROUTER_PREFERENCE_PRICE = "price" as const;

export type QuoteDataV2 = {
  routing: RouterPreference.API;
  quote: QuoteData;
};

export interface GetQuoteArgs {
  tokenInAddress: string;
  tokenInChainId: ChainId;
  tokenInDecimals: number;
  tokenInSymbol?: string;
  tokenOutAddress: string;
  tokenOutChainId: ChainId;
  tokenOutDecimals: number;
  tokenOutSymbol?: string;
  amount: string;
  routerPreference: RouterPreference | typeof INTERNAL_ROUTER_PREFERENCE_PRICE;
  tradeType: TradeType;
  isRoutingAPIPrice?: boolean;
}

export enum SwapRouterNativeAssets {
  ETH = "ETH",
}

export type InterfaceTrade = ClassicTrade<Currency, Currency, TradeType>;

export enum QuoteMethod {
  ROUTING_API = "ROUTING_API",
  CLIENT_SIDE = "CLIENT_SIDE",
  CLIENT_SIDE_FALLBACK = "CLIENT_SIDE_FALLBACK", // If client-side was used after the routing-api call failed.
}

export enum QuoteState {
  SUCCESS = "Success",
  NOT_FOUND = "Not found",
}

export type TradeResult =
  | {
      state: QuoteState.NOT_FOUND;
      trade?: undefined;
      method?: QuoteMethod;
    }
  | {
      state: QuoteState.SUCCESS;
      trade: InterfaceTrade;
      method?: QuoteMethod;
    };
