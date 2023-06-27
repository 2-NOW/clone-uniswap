import clsx from "clsx";
import { useAtomValue, useSetAtom } from "jotai";

import { Dots } from "@/assets/svgs";
import { TOGGLE_MORE } from "@/atom/header/action";
import { IS_MORE_OPEN } from "@/atom/header/state";

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
      <Dots />
    </button>
  );
};
