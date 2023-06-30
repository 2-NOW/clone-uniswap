import { atom } from "jotai";

export type Modal = {
  id: string;
  component: JSX.Element;
};

export const MODALS = atom<Modal[] | null>(null);

export const CLOSE_MODAL = atom<{ close: () => void }>({ close: () => void 0 });
