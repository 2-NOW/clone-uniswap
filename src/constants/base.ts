export type BaseCurrency = {
  name: string;
  symbol: string;
};

export const BaseCurrencies = {
  ETH: [
    { name: "Ethereum", symbol: "ETH" },
    { name: "Wrapped Bitcoin", symbol: "WBTC" },
    { name: "USD Coin", symbol: "USDC" },
  ],
};

export const getBaseCurrencies = (chain: string): BaseCurrency[] | null => {
  switch (chain) {
    case "ETH":
      return BaseCurrencies[chain];
    default:
      return null;
  }
};
