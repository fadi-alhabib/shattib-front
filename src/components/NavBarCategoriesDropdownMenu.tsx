import { CatDropdownItem, downArrowIcon, Link, useState } from "..";

const NavBarCategoriesDropdownMenu = () => {
  const categoriesList = [
    "الرخام",
    "البورسلان",
    "السيراميك",
    "الباركيه",
    "النوافذ",
    "الديكورات",
    "الأبواب",
    "الصفائح الحجرية",
    "الجبس",
    "الحجر",
    "الدهانات",
    "العوازل",
    "البوابات الإلكترونية",
    "مفاتيح وأفياش",
    "مواد صحية وخزانات",
    "التكييف",
    "الإنارة",
  ];
  const [isCatDropdown, setIsCatDropdown] = useState(false);

  window.addEventListener("scroll", () => {
    if (isCatDropdown) setIsCatDropdown(false);
  });
  window.addEventListener("click", () => setIsCatDropdown(false));

  return (
    <button>
      <div className="relative flex items-center">
        {/* <img src={shattibIcon} alt="" /> */}
        <div
          onMouseEnter={() => setIsCatDropdown(true)}
          className="flex items-center"
        >
          <span className="px-2">التصنيفات</span>
          <img className="w-4" src={downArrowIcon} alt="" />
        </div>
        {isCatDropdown ? (
          <div className="fixed z-50 top-16 h-screen">
            <div className="flex flex-col flex-wrap h-1/2 bg-white">
              {categoriesList.map((item, index) => (
                <Link to={"/category"} key={index}>
                  <CatDropdownItem>{item}</CatDropdownItem>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default NavBarCategoriesDropdownMenu;
