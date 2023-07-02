import { ForwardedRef, PropsWithChildren, forwardRef, useEffect } from "react";

export type Modal<T = unknown> = T & { close?: (value?: string) => void };

const DialogInner = (
  { children }: PropsWithChildren,
  ref: ForwardedRef<HTMLDialogElement>
) => {
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
    <dialog ref={ref} className="appearance-none p-0 backdrop:bg-[#0D111Cb8]">
      <form method="dialog">{children}</form>
    </dialog>
  );
};

export const Dialog = forwardRef(DialogInner);
