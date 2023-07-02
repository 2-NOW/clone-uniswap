import { Chain } from "@/state/chain";

export type BaseCurrency = {
  name: string;
  symbol: string;
};

export const BaseCurrencies = {
  [Chain.Ethereum]: [
    { name: "Ethereum", symbol: "ETH" },
    { name: "Wrapped Bitcoin", symbol: "WBTC" },
    { name: "USD Coin", symbol: "USDC" },
  ],
};

export const getBaseCurrencies = (chain: Chain): BaseCurrency[] | null => {
  switch (chain) {
    case Chain.Ethereum:
      return BaseCurrencies[chain];
    default:
      return null;
  }
};
