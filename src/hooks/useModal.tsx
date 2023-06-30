import { useSetAtom } from "jotai";

import { Dialog } from "@/components/modal/template";
import { CLOSE_MODAL } from "@/state/modal";
import { REMOVE_MODAL, SET_MODAL } from "@/state/modal/action";
import { InitialProvider } from "@/state/util/provider";

export const useModal = () => {
  const set = useSetAtom(SET_MODAL);
  const remove = useSetAtom(REMOVE_MODAL);

  const modal = (modal: JSX.Element) => {
    return new Promise((resolve: (value: string) => void) => {
      const id = Math.random().toString(36).slice(-8);
      let _dialog: HTMLDialogElement | null = null;

      const callback = (dialog: HTMLDialogElement) => {
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
        if (!_dialog) return;
        _dialog.close();
      };

      set(
        <InitialProvider values={[[CLOSE_MODAL, { close }]]}>
          <Dialog callback={callback}>{modal}</Dialog>
        </InitialProvider>,
        id
      );
    });
  };

  return { modal };
};
