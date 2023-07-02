import { useSetAtom } from "jotai";
import { cloneElement } from "react";

import { Dialog } from "@/components/modal/template";
import { REMOVE_MODAL, SET_MODAL } from "@/state/modal/action";

export const useModal = () => {
  const set = useSetAtom(SET_MODAL);
  const remove = useSetAtom(REMOVE_MODAL);

  const modal = (modal: JSX.Element) => {
    return new Promise((resolve: (value: string) => void) => {
      const id = Math.random().toString(36).slice(-8);

      let _dialog: HTMLDialogElement | null = null;

      const init = (dialog: HTMLDialogElement) => {
        if (!dialog || dialog?.open) return;
        dialog.showModal();
        dialog.addEventListener(
          "close",
          () => {
            remove(id);
            resolve(dialog.returnValue);
          },
          { once: true }
        );
        _dialog = dialog;
      };

      const close = () => {
        if (_dialog) _dialog.close();
      };

      set(<Dialog ref={init}>{cloneElement(modal, { close })}</Dialog>, id);
    });
  };

  return { modal };
};
