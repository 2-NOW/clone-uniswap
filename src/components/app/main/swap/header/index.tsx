import { Setting } from "./setting";

const BuyButton = () => {
  // TODO: sidebar open
  return (
    <div className="flex cursor-pointer items-center gap-1 hover:text-gray-400/90">
      <span>Buy</span>
      <div className="h-2 w-2 rounded-full bg-[#4C82FB]" />
    </div>
  );
};

export const SwapHeader = () => {
  return (
    <div className="mb-[10px] flex justify-between text-gray-400">
      <div className="flex gap-4 px-3">
        <h1 className="text-white">Swap</h1>
        <BuyButton />
      </div>
      <Setting />
    </div>
  );
};
