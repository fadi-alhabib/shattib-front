import { downArrowIcon } from "..";

interface Props {
  children: string;
  bordered?: boolean;
}

const DropDownMenuButton = ({ children, bordered }: Props) => {
  return (
    <button
      className={
        bordered ? "w-full border border-black rounded px-2" : "w-full"
      }
    >
      <div className="flex justify-between items-center w-full">
        <span>{children}</span>
        <div className="w-7 h-7">
          <img
            className="w-full h-full object-contain"
            src={downArrowIcon}
            alt=""
          />
        </div>
      </div>
    </button>
  );
};

export default DropDownMenuButton;
