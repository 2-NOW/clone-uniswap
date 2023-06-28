import { HTMLAttributes } from "react";

import { SwapInputSvg } from "@/assets/svgs";

export const SwapInput = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="relative z-[1] mx-auto my-[-18px] h-10 w-10 cursor-pointer rounded-xl border-4 border-[#0D111C] bg-[#293249] hover:bg-[#293249]/80"
    >
      <div className="flex h-full w-full items-center justify-center">
        <SwapInputSvg />
      </div>
    </div>
  );
};
