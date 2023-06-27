import { createPortal } from "react-dom";

export const Background = () => {
  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[-1] h-[200vh] w-[200vw] translate-x-[-50vw] translate-y-[-100vh] bg-gradient-to-b from-[#202738] to-[#070816]" />,
    document.body
  );
};
