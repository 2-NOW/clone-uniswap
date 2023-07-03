import clsx from "clsx";
import { ReactNode, InputHTMLAttributes } from "react";

import { NumericInput } from "@/components/global/input/numeric";

interface SwapFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  right: ReactNode;
  bottom?: ReactNode;
}

export const SwapFormInput = ({
  right,
  bottom,
  ...props
}: SwapFormInputProps) => {
  return (
    <div
      className={clsx([
        "relative rounded-xl bg-[#131A2A] p-4",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-[#131A2A]",
        "focus-within:before:border-[#3A4254] focus-within:hover:before:border-[#3A4254]",
        "hover:before:border-[#1E2536]",
      ])}
    >
      <div className="flex min-h-[44px] items-center justify-between">
        <NumericInput
          className="flex-1 text-ellipsis whitespace-nowrap text-4xl font-normal leading-[44px] text-white"
          {...props}
        />
        {/* right section */}
        {right}
      </div>
      <div className="min-h-[20px]">{bottom}</div>
    </div>
  );
};
