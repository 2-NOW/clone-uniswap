import { getLogoSrc } from "@/constants/logo";

interface CurrencyLogoProps {
  symbol?: string;
  size: `${number}px`;
}

export const CurrencyLogo = ({ symbol, size }: CurrencyLogoProps) => {
  const logoSrc = symbol ? getLogoSrc(symbol) : null;

  if (logoSrc) {
    return (
      <img
        style={{
          width: size,
          height: size,
        }}
        alt={`${symbol} logo`}
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
      <span className="text-xl font-semibold">{symbol ? symbol[0] : "?"}</span>
    </div>
  );
};
