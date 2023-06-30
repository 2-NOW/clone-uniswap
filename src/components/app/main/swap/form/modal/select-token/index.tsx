import clsx from "clsx";
import { useAtomValue } from "jotai";
import { KeyboardEvent, ChangeEvent, useState } from "react";

import { BaseCurrencyList } from "./badge";
import { CurrencyList } from "./list";

import { CloseSvg } from "@/assets/svgs";
import { getBaseCurrencies } from "@/constants/base";
import { useFocus } from "@/hooks/useFocus";
import { CLOSE_MODAL } from "@/state/modal";

interface SelectTokenModalProps {
  chain: string;
  selectedCurrency: string | null;
}

export const SelectTokenModal = ({
  chain,
  selectedCurrency,
}: SelectTokenModalProps) => {
  const { close } = useAtomValue(CLOSE_MODAL);
  // TODO: token list
  // TODO: effect on selected token - badge, list
  // TODO: effect unmount

  // TODO: dialog shadow
  // TODO: handle enter to select token

  const { focusRef: ref } = useFocus();
  const [searchQuery, setSearchQuery] = useState("");

  const currencies = getBaseCurrencies(chain);
  const searchCurrencies = currencies?.filter(({ symbol, name }) => {
    const query = searchQuery.toLowerCase();
    return (
      symbol.toLowerCase().includes(query) || name.toLowerCase().includes(query)
    );
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    // TODO: if query is valid, select token

    close();
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
          ref={ref}
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
        <BaseCurrencyList chain={chain} selectedCurrency={selectedCurrency} />
      </div>
      {/* separator */}
      <div className="h-[1px] bg-[#98A1C03d]" />
      {/* currency list */}
      <div className="flex-1">
        <CurrencyList currencies={searchCurrencies ?? []} />
      </div>
    </div>
  );
};
