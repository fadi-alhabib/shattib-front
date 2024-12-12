import { DropDownMenuButton, fourDotsMenu, listMenu } from "..";

const ProductsFilterViewControls = () => {
  return (
    <div className="m-4 mb-12 flex justify-between p-4 border-4 rounded-xl w-full h-16">
      <div className="flex gap-4">
        <button>
          <img src={listMenu} alt="" />
        </button>
        <button>
          <img src={fourDotsMenu} alt="" />
        </button>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-500">فرز حسب</span>
        <div className="w-16">
          <DropDownMenuButton>الكل</DropDownMenuButton>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilterViewControls;
