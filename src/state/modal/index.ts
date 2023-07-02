import { atom } from "jotai";

export type ModalState = {
  id: string;
  component: JSX.Element;
};

export const MODALS = atom<ModalState[] | null>(null);
