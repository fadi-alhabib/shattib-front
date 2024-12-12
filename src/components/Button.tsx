import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const Button = ({ children, size, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        size === "md"
          ? "w-full px-8 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-900 rounded-lg hover:bg-primary hover:text-black"
          : "w-full px-24 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-900 rounded-lg hover:bg-primary hover:text-black"
      }
    >
      {children}
    </button>
  );
};

export default Button;
