import {
  shattibLogoRow,
  searchIcon,
  cartIcon,
  heartIcon,
  accountIcon,
  TextInput,
  Link,
  NavBarCategoriesDropdownMenu,
} from "..";

const NavBar = () => {
  // const [cartItemCount, setCartItemCount] = useState<number>(0);

  // // Function to update cart item count from localStorage
  // const updateCartItemCount = () => {
  //   const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
  //   const totalItems = currentCart.reduce(
  //     (total: number, item: { quantity: number }) => total + item.quantity,
  //     0
  //   );
  //   setCartItemCount(totalItems);
  // };

  // // Call updateCartItemCount when the component mounts
  // useEffect(() => {
  //   updateCartItemCount();
  // }, []);

  // const { setIsShownEngineerRequestModal } = useEngineerRequest();
  return (
    <nav className="flex items-center justify-between border-b py-4 px-8">
      <img src={shattibLogoRow} alt="" />
      <Link to={"/home"}>
        <span>الصفحة الرئيسية</span>
      </Link>
      <NavBarCategoriesDropdownMenu />
      {/* <Link to={"/home"}>
        <span>جميع المنتجات</span>
      </Link> */}
      <Link to={"/conditions"}>
        <span>كراسات الشروط</span>
      </Link>
      <div className="w-96">
        <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
      </div>
      <Link to={"/cart"}>
        <div className="relative flex flex-col items-center">
          {/* <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
            {cartItemCount}
          </div> */}
          <img src={cartIcon} alt="" />
          <span>السلة</span>
        </div>
      </Link>
      <Link to={"/wishlist"}>
        <div className="flex flex-col items-center">
          <img src={heartIcon} alt="" />
          <span>المفضلة</span>
        </div>
      </Link>
      {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div> */}
      <Link to={"/orders"}>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
          <img src={accountIcon} alt="" />
        </div>
      </Link>
      <span>EN</span>
    </nav>
  );
};

export default NavBar;
