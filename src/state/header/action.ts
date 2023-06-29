import { atom } from "jotai";

import { IS_MORE_OPEN } from ".";

export const TOGGLE_MORE = atom(null, (get, set) => {
  set(IS_MORE_OPEN, !get(IS_MORE_OPEN));
});
