import { SwapButton } from "./button";
import { SwapInfo } from "./info";
import { SwapFormInputPanel } from "./input-panel";
import { SwapInput } from "./swap-input";

export const SwapForm = () => {
  // TODO: swap state for interaction

  const handleInputSelect = (currency: string) => {
    // TODO: update swap currency state
  };

  const handleOutputSelect = (currency: string) => {
    // TODO: update swap currency state
  };

  return (
    <form>
      <SwapFormInputPanel
        currency={"WBTC"}
        onSelectCurrency={handleInputSelect}
      />
      {/* arrow down to swap input */}
      <SwapInput />
      <div className="flex flex-col gap-1">
        <SwapFormInputPanel
          currency={null}
          onSelectCurrency={handleOutputSelect}
        />
        {/* conditional render swap info */}
        <SwapInfo />
        <SwapButton />
      </div>
    </form>
  );
};
