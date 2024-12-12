import {
  heartIcon,
  addToCartIcon,
  testImg,
  useState,
  Link,
  redHeartIcon,
  AccentText,
  ButtonGold,
} from "..";

interface Props {
  name?: string;
  price?: number;
  id?: number;
}

const ProductCard = ({
  name = "جاري التحميل...",
  price = 0,
  id = 0,
}: Props) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = currentCart.findIndex(
      (item: { productId: number }) => item.productId === id
    );

    if (existingProductIndex > -1) {
      currentCart[existingProductIndex].quantity += 1;
    } else {
      currentCart.push({
        productId: id,
        quantity: 1,
        name: name,
        price: price,
      });
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));

    alert("تمت إضافة المنتج للسلة");

    window.dispatchEvent(new Event("storage"));
  };

  const [active, setActive] = useState(false);
  return (
    <div className="pb-2 h-80 w-64 rounded-xl bg-gray-50 shadow shadow-gray-500 transition-all duration-700 hover:bg-amber-100">
      <div className="relative h-1/2">
        <Link to={`/product/${id}`}>
          <img
            className="rounded-t-xl h-full w-full object-cover"
            src={testImg}
            alt=""
          />
        </Link>
        <button onClick={() => setActive(!active)}>
          <div className="absolute top-0 m-2 flex items-center justify-center h-12 w-12 rounded-full bg-white transition-all duration-700 hover:bg-red-200">
            <img src={active ? redHeartIcon : heartIcon} alt="" />
          </div>
        </button>
      </div>
      <Link to={`/product/${id}`}>
        <div className="h-1/2 flex flex-col justify-between p-2">
          {/* <h2 className="text-lg font-bold">طقم شطاف WG 006</h2> */}
          <h2 className="text-lg font-bold">{name}</h2>
          {/* <span className="text-sm text-gray-600 py-1">طقم شطاف</span>
          <p>إمكانية التحكم بالمياه من خلال عصا سهلة الاستخدام</p> */}
          <span>
            {/* <AccentText>50 ريال</AccentText> */}
            <AccentText>{price} ريال</AccentText>
          </span>
          <div className="mx-2 my-1">
            <ButtonGold onClick={handleAddToCart}>
              <div className="flex justify-center">
                أضف إلى السلة
                <img className="ps-2" src={addToCartIcon} alt="" />
              </div>
            </ButtonGold>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
