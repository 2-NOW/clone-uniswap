export type NativeCurrency = {
  name: string;
  symbol: string;
};

export const NativeCurrencies = {
  ETH: [
    { name: "Ethereum", symbol: "ETH" },
    { name: "Wrapped Bitcoin", symbol: "WBTC" },
    { name: "USD Coin", symbol: "USDC" },
  ],
};

export const getNativeCurrencies = (chain: string): NativeCurrency[] | null => {
  switch (chain) {
    case "ETH":
      return NativeCurrencies[chain];
    default:
      return null;
  }
};
