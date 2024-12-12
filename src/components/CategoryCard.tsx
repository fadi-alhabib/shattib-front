import { categoryImg01 } from "..";

interface Props {
  children: string;
  id?: number;
  img?: string;
  num?: string;
  onClick?: () => void;
  selected?: boolean;
}

const CategoryCard = ({ children, id, img, num, onClick, selected }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`h-48 w-56 rounded-xl ${
        selected ? "bg-primary text-white" : "hover:bg-amber-100"
      }`}
    >
      <div className="flex justify-center items-center h-4/5 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={categoryImg01}
          alt=""
        />
      </div>
      <div className="flex justify-between p-2 gap-2">
        <span>{children}</span>
        <span>{num}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
