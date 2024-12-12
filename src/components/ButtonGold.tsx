import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonGold = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-full px-4 py-1 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded hover:bg-secondary"
      }
    >
      {children}
    </button>
  );
};

export default ButtonGold;
