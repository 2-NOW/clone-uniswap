import { Currency, Price } from "@uniswap/sdk-core";
import bn from "bignumber.js";
import { useReducer, useState } from "react";

import { ChevronDown, GasSvg, SpinnerSvg } from "@/assets/svgs";
import { getFiatValue } from "@/constants/fiat";
import { InterfaceTrade } from "@/libs/route/types";
import { formatNumber } from "@/utils/number/format";
import { toLocaleString } from "@/utils/number/format-locale";
import { parsePriceFloat } from "@/utils/number/parse-price";

interface SwapInfoProps {
  trade?: InterfaceTrade;
  loading: boolean;
}

const InfoItem = ({ price }: { price: Price<Currency, Currency> }) => {
  const [showInverted, toggleInverted] = useReducer((state) => !state, false);

  const { baseCurrency, quoteCurrency } = price;
  const currency = showInverted ? baseCurrency : quoteCurrency;
  const invertedCurrency = showInverted ? quoteCurrency : baseCurrency;

  const fiatValue = getFiatValue(currency);
  const precisePrice = parsePriceFloat(showInverted ? price : price.invert());
  const formattedPrice = formatNumber(precisePrice);

  const label = invertedCurrency.symbol;
  const labelInverted = currency.symbol;

  const text = `${
    "1 " + labelInverted + " = " + formattedPrice ?? "-"
  } ${label}`;
  const usdPrice = bn(precisePrice ?? 0)
    .times(fiatValue)
    .toNumber();

  return (
    <div
      onClick={toggleInverted}
      className="flex items-center justify-between gap-1 text-sm font-normal"
    >
      <span>{text}</span>
      <span className="text-[#98A1C0]">(${toLocaleString(usdPrice)})</span>
    </div>
  );
};

const LoadingInfo = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <SpinnerSvg className="h-4 w-4 animate-spin" />
        <span className="text-[#98A1C0]">Fetching best price...</span>
      </div>
      <ChevronDown className="text-[#98A1C0]" />
    </div>
  );
};

const GasInfo = ({
  gasUseEstimateUSD,
}: {
  gasUseEstimateUSD: string | null | undefined;
}) => {
  const formattedGasPriceString = gasUseEstimateUSD
    ? gasUseEstimateUSD === "0.00"
      ? "<$0.01"
      : "$" + gasUseEstimateUSD
    : undefined;

  return (
    <div className="flex items-center gap-1 text-[#98A1C0]">
      <GasSvg />
      <span>{formattedGasPriceString ?? "-"}</span>
      <ChevronDown />
    </div>
  );
};

export const SwapInfo = ({ trade, loading }: SwapInfoProps) => {
  // TODO: add details dropdown
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-2xl border border-[#98A1C03d] px-4 py-3">
      {trade ? (
        <div className="flex items-center justify-between">
          <InfoItem price={trade.executionPrice} />
          <GasInfo gasUseEstimateUSD={trade?.gasUseEstimateUSD} />
        </div>
      ) : loading ? (
        <LoadingInfo />
      ) : null}
    </div>
  );
};
