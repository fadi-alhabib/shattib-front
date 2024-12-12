import { downArrowGrayIcon } from "..";

interface Props {
  title?: string;
  placeholder?: string;
}

const DropdownMenu = ({ title, placeholder = " " }: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <label className="flex self-start mb-2 text-sm">{title}</label>
      <button className="w-full h-full">
        <div className="border rounded w-full h-full flex items-center justify-between px-4">
          <span className="text-gray-500">{placeholder}</span>
          <img className="w-4" src={downArrowGrayIcon} alt="" />
        </div>
      </button>
    </div>
  );
};

export default DropdownMenu;
