import { Currency } from "@uniswap/sdk-core";

export const fiatValues = {
  ETH: 1000,
  WBTC: 10000,
  USDC_MAINNET: 1,
};

export const getFiatValue = (currency: Currency | null) => {
  switch (currency?.symbol) {
    case "ETH":
      return fiatValues.ETH;
    case "WBTC":
      return fiatValues.WBTC;
    case "USDC":
      return fiatValues.USDC_MAINNET;
    default:
      return 1;
  }
};
