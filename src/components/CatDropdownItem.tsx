import { leftArrowIcon } from "..";

interface Props {
  children: string;
}

const CatDropdownItem = ({ children }: Props) => {
  return (
    <div className="flex justify-between w-44 p-4 rounded hover:bg-primary hover:bg-opacity-25">
      <span>{children}</span>
      <img src={leftArrowIcon} alt="" />
    </div>
  );
};

export default CatDropdownItem;
