type ToLocaleStringOptions = {
  locale?: string;
  minimum: number;
  maximum: number;
};

export const toLocaleString = (
  value: number | `${number}` | undefined,
  precisionOptions?: ToLocaleStringOptions | number
): string => {
  if (typeof value === "undefined") return "-";

  const number = typeof value === "number" ? value : Number(value);

  switch (typeof precisionOptions) {
    case "undefined":
      return number.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20,
      });
    case "number":
      return number.toLocaleString("en-US", {
        minimumFractionDigits: precisionOptions,
        maximumFractionDigits: precisionOptions,
      });
    default:
      return number.toLocaleString(precisionOptions?.locale, {
        minimumFractionDigits: precisionOptions.minimum,
        maximumFractionDigits: precisionOptions.maximum,
      });
  }
};
