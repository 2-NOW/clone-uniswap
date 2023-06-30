import clsx from "clsx";
import { useAtomValue, useSetAtom } from "jotai";

import { DotsSvg } from "@/assets/svgs";
import { IS_MORE_OPEN } from "@/state/header";
import { TOGGLE_MORE } from "@/state/header/action";

export const MoreButton = () => {
  // TODO: add hover effect
  const isMoreOpen = useAtomValue(IS_MORE_OPEN);
  const toggleMore = useSetAtom(TOGGLE_MORE);

  return (
    <button
      onClick={() => toggleMore()}
      className={clsx([
        "flex h-10 w-10 items-center justify-center",
        !isMoreOpen && "text-gray-400",
      ])}
    >
      <DotsSvg />
    </button>
  );
};
