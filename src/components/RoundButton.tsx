interface Props {
  children: string;
  active?: boolean;
}

const RoundButton = ({ children, active = false }: Props) => {
  return (
    <button
      className={
        active
          ? "rounded-full w-36 h-12 bg-secondary text-white me-4 active:bg-secondary active:text-white"
          : "rounded-full w-36 h-12 bg-gray-200 me-4 hover:bg-sky-100"
      }
    >
      {children}
    </button>
  );
};

export default RoundButton;
