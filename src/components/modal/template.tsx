import { PropsWithChildren, useEffect, useRef } from "react";

interface DialogProps {
  callback: (dialog: HTMLDialogElement) => void;
}

export const Dialog = ({
  callback,
  children,
}: PropsWithChildren<DialogProps>) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    callback(ref.current);
  }, [callback]);

  // click outside to close
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current) return;
      if (e.target === ref.current) ref.current.close();
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);

  return (
    <dialog ref={ref} className="appearance-none bg-transparent p-0">
      <form method="dialog">{children}</form>
    </dialog>
  );
};
