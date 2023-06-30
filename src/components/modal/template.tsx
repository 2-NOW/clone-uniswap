import { PropsWithChildren, useEffect } from "react";

interface DialogProps {
  callback: (dialog: HTMLDialogElement) => void;
}

export const Dialog = ({
  callback,
  children,
}: PropsWithChildren<DialogProps>) => {
  // close dialog when click outside
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (e.target instanceof HTMLDialogElement && e.target.open) {
        e.target.close();
      }
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);

  return (
    <dialog
      ref={callback}
      className="appearance-none p-0 backdrop:bg-[#0D111Cb8]"
    >
      <form method="dialog">{children}</form>
    </dialog>
  );
};
