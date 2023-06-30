import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import { ArrowDownSvg } from "@/assets/svgs";
import { getLogoSrc } from "@/constants/logo";

interface CurrencyLogoProps {
  currency: string;
}

const CurrencyLogo = ({ currency }: CurrencyLogoProps) => {
  const logoSrc = getLogoSrc(currency);

  if (logoSrc) {
    return <img className="h-6 w-6" alt={`${currency} logo`} src={logoSrc} />;
  }
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
      <span className="text-xl font-semibold">{currency[0]}</span>
    </div>
  );
};

interface CurrencyProps {
  currency: string | null;
}

const Currency = ({ currency }: CurrencyProps) => {
  const text = currency ?? "Select token";

  return (
    <div className="flex items-center">
      {currency && (
        <div className="mr-0.5">
          <CurrencyLogo currency={currency} />
        </div>
      )}
      <span className="mx-1 text-xl font-semibold leading-5">{text}</span>
    </div>
  );
};

export const CurrencySelect = ({
  currency,
  ...props
}: CurrencyProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">) => {
  return (
    <button
      className={clsx([
        "ml-3 rounded-2xl font-normal transition-colors duration-300 active:transition-none",
        !currency
          ? "bg-[#4C82FB] p-1.5 pl-2 active:bg-[#5991F4]"
          : "bg-[#293249] p-1 pr-2 hover:bg-[#323B52] active:bg-[#4B546C]",
      ])}
      type="button"
      {...props}
    >
      <span className="flex items-center p-0">
        <Currency currency={currency} />
        <ArrowDownSvg className="ml-2 mr-1" />
      </span>
    </button>
  );
};
