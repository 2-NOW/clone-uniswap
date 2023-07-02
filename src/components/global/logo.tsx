import { getLogoSrc } from "@/constants/logo";

interface CurrencyLogoProps {
  currency: string;
  size: `${number}px`;
}

export const CurrencyLogo = ({ currency, size }: CurrencyLogoProps) => {
  const logoSrc = getLogoSrc(currency);

  if (logoSrc) {
    return (
      <img
        style={{
          width: size,
          height: size,
        }}
        alt={`${currency} logo`}
        src={logoSrc}
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center rounded-full bg-gray-500"
      style={{
        width: size,
        height: size,
      }}
    >
      <span className="text-xl font-semibold">{currency[0]}</span>
    </div>
  );
};
