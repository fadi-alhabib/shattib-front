import {
  ButtonGold,
  cartIcon,
  CartItemCard,
  MainPadding,
  Navigate,
  RoundButton,
  useApi,
  useEffect,
  useState,
} from "..";
import { CartItem } from "../models/CartItem";

const CartPage = () => {
  const { isLoading, postData } = useApi("Orders", "POST", true);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Function to remove a product from the cart
  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to update the quantity of an item in the cart
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // Function to handle the order submission
  const handleOrderSubmit = async () => {
    // Transform the cart data into the required structure
    const orderData = {
      dateOfOrder: new Date().toISOString().split("T")[0], // Format the date as "YYYY-MM-DD"
      items: cart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      kind: "Order",
    };

    try {
      await postData(orderData);

      localStorage.removeItem("cart");

      <Navigate to={"home"} />;
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <main>
      <MainPadding>
        <div className="flex items-center gap-2 pb-8">
          <img className="w-12 h-12" src={cartIcon} alt="cart" />
          <span className="text-2xl font-bold text-gray-500">السلة</span>
        </div>

        <div className="flex justify-center pb-8">
          <RoundButton active>للشراء</RoundButton>
          <RoundButton>العينات</RoundButton>
        </div>

        {/* Cart Items List */}
        <div className="w-full">
          <div className="w-full">
            <div className="flex justify-center">
              <div className="flex justify-around ms-32 w-3/5 border-b-2 border-b-gray-400 py-1">
                <span className="text-lg text-gray-400">اسم المنتج</span>
                <span className="text-lg text-gray-400">الكمية</span>
                <span className="text-lg text-gray-400">السعر</span>
              </div>
            </div>

            {/* Dynamically render Cart Items */}
            {cart.length === 0 ? (
              <div className="text-center py-4">لا توجد منتجات في السلة</div>
            ) : (
              cart.map((item, index) => (
                <CartItemCard
                  key={index}
                  productId={item.productId}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  remove
                  onRemove={handleRemoveFromCart} // Pass the remove handler
                  onQuantityChange={handleQuantityChange} // Pass the quantity change handler
                  numbered
                />
              ))
            )}
          </div>
        </div>

        <hr className="h-0.5 border-0 bg-gray-400" />

        {/* Total Price */}
        <div className="flex items-baseline gap-4 justify-end my-4">
          <span className="text-xl">التكلفة الكلية</span>
          <span className="text-3xl">{totalPrice} ريال</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end w-full">
          <div className="flex gap-4 w-1/3">
            <button className="border border-black rounded py-1 px-3 min-w-44">
              إضافة منتجات
            </button>
            <ButtonGold onClick={handleOrderSubmit}>
              {isLoading ? <span>تحميل...</span> : <span>إنشاء طلب</span>}
            </ButtonGold>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default CartPage;
