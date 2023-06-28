import { Setting } from "./setting";

const BuyButton = () => {
  // TODO: sidebar open
  return <div className="hover:text-gray-400/70">Buy</div>;
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
