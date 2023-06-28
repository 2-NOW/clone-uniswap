import { Menu } from "./menu";

import { LogoSvg } from "@/assets/svgs";

export const Left = () => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <LogoSvg className="mr-3 text-white" />
        <Menu />
      </div>
    </div>
  );
};
