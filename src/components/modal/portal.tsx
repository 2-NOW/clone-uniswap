import { useAtomValue } from "jotai";
import { createPortal } from "react-dom";

import { MODALS } from "@/state/modal";

export const ModalPortal = () => {
  const root = document?.querySelector("#modal-root") as HTMLElement | null;
  const modals = useAtomValue(MODALS);

  if (!root) return null;
  return (
    <>
      {modals?.map(({ component, id }) =>
        createPortal({ ...component, key: id }, root)
      )}
    </>
  );
};
