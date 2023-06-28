import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes } from "react";

export const NumericInput = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const { onChange, className, ...restProps } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const regex = /^[0-9]*[.,]?[0-9]*$/;

    if (!regex.test(value)) return;
    onChange?.(event);
  };

  return (
    <input
      {...restProps}
      className={clsx([
        "w-full min-w-0 appearance-none bg-transparent p-0 focus:outline-none",
        className,
      ])}
      onChange={handleChange}
      inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder="0"
      minLength={1}
      maxLength={79}
      spellCheck="false"
    />
  );
};
