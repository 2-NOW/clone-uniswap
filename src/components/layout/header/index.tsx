import { useAtomValue } from "jotai";

import { Left } from "./left";
import { More } from "./left/more";

import { IS_MORE_OPEN } from "@/atom/header/state";

const Right = () => {
  // TODO: search, network, profile (sidebar)
  return <></>;
};

export const Header = () => {
  // TODO: add more menu
  const isMoreOpen = useAtomValue(IS_MORE_OPEN);

  return (
    <header className="fixed top-0 h-[72px]">
      <nav className="flex justify-between px-3 py-5">
        <Left />
        <Right />
      </nav>
      {/* more menu */}
      {isMoreOpen && <More />}
    </header>
  );
};
