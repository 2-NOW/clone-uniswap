import { Currency, Ether, NativeCurrency, Token } from "@uniswap/sdk-core";

export enum SupportedChainId {
  MAINNET = 1,
}

export const USDC_MAINNET = new Token(
  SupportedChainId.MAINNET,
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  6,
  "USDC",
  "USDC"
);

export const WBTC = new Token(
  SupportedChainId.MAINNET,
  "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  8,
  "WBTC",
  "Wrapped BTC"
);

class ExtendedEther extends Ether {
  public static onChain(chainId: SupportedChainId): ExtendedEther {
    return new ExtendedEther(chainId);
  }
}

export const ETH: NativeCurrency = ExtendedEther.onChain(
  SupportedChainId.MAINNET
);

export const getCurrency = (currencyId: string | null) => {
  switch (currencyId) {
    case "ETH":
      return ETH;
    case "USDC":
      return USDC_MAINNET;
    case "WBTC":
      return WBTC;
    default:
      return null;
  }
};

export const getCurrencyAddress = (currency: Currency) => {
  switch (currency) {
    case ETH:
      return "ETH";
    case USDC_MAINNET:
      return USDC_MAINNET.address;
    case WBTC:
      return WBTC.address;
    default:
      return null;
  }
};
