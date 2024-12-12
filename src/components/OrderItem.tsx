import { productImg, TitleNumber } from "..";

interface Props {
  index: number;
  name?: string;
  quantity?: number;
  price?: number;
}

const OrderItem = ({
  index,
  name = "طقم شاطاف WG006",
  quantity = 6,
  price = 15,
}: Props) => {
  return (
    <div className="flex justify-around items-center gap-4 border-b-2">
      <h1 className="text-xl font-bold">{index}</h1>
      <div className="bg-gray-100 h-16 aspect-video py-2 px-6 rounded">
        <img className="w-full h-full rounded" src={productImg} alt="" />
      </div>
      <TitleNumber column subTitle="طقم شطاف">
        {name}
      </TitleNumber>
      <TitleNumber inverse column subTitle={`x${quantity}`}>
        الكمية المطلوبة
      </TitleNumber>
      <TitleNumber inverse column subTitle={`${price} ريال`}>
        السعر الإجمالي
      </TitleNumber>
    </div>
  );
};

export default OrderItem;
