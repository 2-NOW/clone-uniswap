import { atom } from "jotai";

import { MODALS } from ".";

export const SET_MODAL = atom(
  null,
  (_, set, component: JSX.Element, id: string) => {
    set(MODALS, (prev) => {
      if (prev) return [...prev, { id, component }];
      return [{ id, component }];
    });
  }
);

export const REMOVE_MODAL = atom(null, (_, set, id: string) => {
  set(MODALS, (prev) => {
    if (prev) return prev.filter((modal) => modal.id !== id);
    return [];
  });
});
