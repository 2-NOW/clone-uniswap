import { NativeCurrency, Token } from "@uniswap/sdk-core";

import { ETH, SupportedChainId, USDC_MAINNET, WBTC } from "./tokens";

export const BaseCurrencies = {
  [SupportedChainId.MAINNET]: [ETH, WBTC, USDC_MAINNET],
};

export const getBaseCurrencies = (
  chain: SupportedChainId
): (NativeCurrency | Token)[] | null => {
  switch (chain) {
    case SupportedChainId.MAINNET:
      return BaseCurrencies[chain];
    default:
      return null;
  }
};
