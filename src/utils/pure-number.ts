export const pureNumber = (value: string) => {
  // check value is can do parseFloat
  if (value === "") return undefined;

  const pureNumber = parseFloat(value.replace(/,/g, ""));
  if (isNaN(pureNumber)) return undefined;
  return pureNumber;
};
