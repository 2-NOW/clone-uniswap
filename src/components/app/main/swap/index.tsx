import { SwapForm } from "./form";
import { SwapHeader } from "./header";

export const Swap = () => {
  return (
    <div className="w-full max-w-[480px] px-2 pt-[68px]">
      {/* // ? do i need z index here ? */}
      <main className="rounded-2xl border border-gray-700/80 bg-[#0d111c] px-2 pb-2 pt-3">
        {/* nav */}
        <SwapHeader />
        <SwapForm />
      </main>
    </div>
  );
};
