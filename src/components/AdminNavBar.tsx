import {
  accountIcon,
  addToBoxIcon,
  ButtonGold,
  Link,
  searchIcon,
  shattibLogoRow,
  TextInput,
} from "..";

const AdminNavBar = () => {
  return (
    <nav className="fixed w-full z-10 flex bg-gray-100 shadow-xl items-center justify-between border-b py-2 px-8">
      <img src={shattibLogoRow} alt="" />
      <div className="w-1/2">
        <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
      </div>

      <div className="flex items-center gap-12">
        <Link to={"/admin/product/new"}>
          <ButtonGold>
            <div className="flex gap-4">
              <img src={addToBoxIcon} alt="" />
              <span>أضف منتج</span>
            </div>
          </ButtonGold>
        </Link>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
          <img src={accountIcon} alt="" />
        </div>
        <span>EN</span>
      </div>
    </nav>
  );
};

export default AdminNavBar;
