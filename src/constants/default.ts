import { Currency } from "@uniswap/sdk-core";

import { ETH, SupportedChainId, USDC_MAINNET, WBTC } from "./tokens";

export const defaultTokens = {
  [SupportedChainId.MAINNET]: [ETH, WBTC, USDC_MAINNET],
};

export const getDefaultTokens = (
  chain: SupportedChainId
): Currency[] | null => {
  switch (chain) {
    case SupportedChainId.MAINNET:
      return defaultTokens[chain];
    default:
      return null;
  }
};
