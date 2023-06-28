import { SwapButton } from "./button";
import { CurrencySelect } from "./currency-select";
// import { SwapInfo } from "./info";
import { SwapFormInput } from "./input";
import { SwapInput } from "./swap-input";

export const SwapForm = () => {
  // TODO: add swap input

  return (
    <form>
      <SwapFormInput right={<CurrencySelect currency="DAI" />} />
      {/* arrow down to swap input */}
      <SwapInput />
      <div className="flex flex-col gap-1">
        <SwapFormInput right={<CurrencySelect currency={null} />} />
        {/* conditional render swap info */}
        {/* <SwapInfo /> */}
        <SwapButton label="Connect Wallet" />
      </div>
    </form>
  );
};
