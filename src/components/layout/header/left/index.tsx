import { Menu } from "./menu";

import { Logo } from "@/assets/svgs";

export const Left = () => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <Logo className="mr-3 text-white" />
        <Menu />
      </div>
    </div>
  );
};
