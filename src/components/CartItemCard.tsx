import { AccentText, productImg, QuantityControls, redTrashIcon } from "..";

interface Props {
  name: string;
  price: number;
  quantity: number;
  productId: number;
  onRemove: (productId: number) => void;
  onQuantityChange: (productId: number, newQuantity: number) => void; // Add quantity change handler
  numbered?: boolean;
  remove?: boolean;
}

const CartItemCard = ({
  numbered,
  remove,
  name = "طقم شطاف WG004",
  price = 0,
  quantity = 1,
  productId = 0,
  onRemove,
  onQuantityChange,
}: Props) => {
  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(productId, newQuantity); // Notify parent about the quantity change
  };

  return (
    <div className="flex items-center gap-12 my-8">
      {numbered ? <h1 className="text-2xl font-bold">1</h1> : null}
      <div className="flex justify-around items-center rounded-xl bg-gray-100 h-32 w-full">
        <img className="rounded-xl h-28 w-20" src={productImg} alt="" />
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <h2 className="text-xl font-bold text-gray-400">طقم شطاف</h2>
        </div>
        <div className="w-32">
          <QuantityControls
            quantity={quantity}
            onChange={handleQuantityChange} // Pass handler to update quantity
          />
        </div>
        <AccentText>{price} ريال</AccentText>
        {remove ? (
          <button onClick={() => onRemove(productId)}>
            <div className="flex gap-2">
              <img src={redTrashIcon} alt="Remove" />
              <span className="text-red-500 font-bold">إزالة</span>
            </div>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CartItemCard;
