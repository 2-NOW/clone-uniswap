import { ButtonHTMLAttributes } from "react";

interface SwapButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  label: string;
}

const Button = ({ label, ...props }: SwapButtonProps) => {
  return (
    <button
      className="w-full rounded-[20px] border border-transparent bg-[#4C82FB3d] p-4 text-center transition duration-200 hover:bg-[#21355A]"
      type="button"
      {...props}
    >
      <div className="text-xl font-semibold text-[#4C82FB]">{label}</div>
    </button>
  );
};

export const SwapButton = () => {
  // TODO: sidebar interaction
  // TODO: swap action
  return <Button label="Connect Wallet" />;
};
