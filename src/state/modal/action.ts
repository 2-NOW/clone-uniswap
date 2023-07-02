import { atom } from "jotai";

import { MODALS, ModalState } from ".";

export const SET_MODAL = atom(
  null,
  (_, set, modal: JSX.Element, id: string) => {
    const _modal: ModalState = { id, component: modal };
    set(MODALS, (prev) => {
      if (prev) return [...prev, _modal];
      return [_modal];
    });
  }
);

export const REMOVE_MODAL = atom(null, (_, set, id: string) => {
  set(MODALS, (prev) => {
    if (prev) return prev.filter((modal) => modal.id !== id);
    return [];
  });
});
