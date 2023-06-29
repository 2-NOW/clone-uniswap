import { atom } from "jotai";

export type Modal = {
  id: string;
  component: JSX.Element;
};

export const MODALS = atom<Modal[] | null>(null);
