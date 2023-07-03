import { Currency, NativeCurrency, Token } from "@uniswap/sdk-core";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { KeyboardEvent, ChangeEvent, useState } from "react";

import { BaseCurrencyList } from "./bases";
import { CurrencyList } from "./list";

import { CloseSvg } from "@/assets/svgs";
import { Modal } from "@/components/modal/template";
import { getDefaultTokens } from "@/constants/default";
import { SupportedChainId } from "@/constants/tokens";
import { useFocus } from "@/hooks/useFocus";
import { CHAIN } from "@/state/chain";
import { doNothing } from "@/utils/do-nothing";

interface SelectTokenModalProps {
  currency: Currency | null;
  onSelectCurrency: (currency: NativeCurrency | Token) => void;
}

export const SelectTokenModal = ({
  currency,
  onSelectCurrency,
  close = doNothing,
}: Modal<SelectTokenModalProps>) => {
  // TODO: effect unmount
  // TODO: dialog shadow
  const chain = useAtomValue(CHAIN);

  const { focusRef } = useFocus();
  const [searchQuery, setSearchQuery] = useState("");

  const currencies = getDefaultTokens(SupportedChainId.MAINNET);
  const searchCurrencies = currencies?.filter(({ symbol, name }) => {
    const query = searchQuery.toLowerCase();
    return (
      symbol?.toLowerCase().includes(query) ||
      name?.toLowerCase().includes(query)
    );
  });

  const handleSelect = (currency: Currency) => {
    onSelectCurrency(currency);
    close();
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (searchQuery) {
      const first = searchCurrencies?.[0];
      if (first) handleSelect(first);
    }
  };

  return (
    <div className="h-[80vh] max-h-[680px] w-[420px] rounded-[20px] border border-[#98A1C03d] bg-[#0D101C]">
      {/* top */}
      <div className="flex flex-col gap-4 p-5">
        {/* title */}
        <div className="flex items-center justify-between">
          <span>Select a token</span>
          <button type="submit">
            <CloseSvg />
          </button>
        </div>
        {/* search */}
        <input
          type="text"
          // focus on mount
          ref={focusRef}
          onKeyDown={handleEnter}
          value={searchQuery}
          onChange={handleInput}
          autoComplete="off"
          placeholder="Search name or paste address"
          className={clsx([
            "h-[40px] rounded-xl border border-[#98A1C03d] p-4 pl-10 outline-none placeholder:text-[#5D6886]",
            "bg-[#131A2A] bg-[url('src/assets/svgs/search.svg')] bg-[length:20px_20px] bg-[12px_center] bg-no-repeat",
            "border-[#4C82FB3d] transition-colors duration-100 focus:bg-[#0D111C]",
          ])}
        />
        {/* currency list */}
        <BaseCurrencyList
          chain={chain}
          currency={currency}
          onSelectCurrency={handleSelect}
        />
      </div>
      {/* separator */}
      <div className="h-[1px] bg-[#98A1C03d]" />
      {/* currency list */}
      <div className="flex-1">
        <CurrencyList
          currencies={searchCurrencies ?? []}
          currency={currency}
          onSelectCurrency={handleSelect}
        />
      </div>
    </div>
  );
};
