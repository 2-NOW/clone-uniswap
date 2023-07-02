import { atom } from "jotai";

export enum Chain {
  Ethereum = "ETHEREUM",
}

export const CHAIN = atom<Chain>(Chain.Ethereum);
