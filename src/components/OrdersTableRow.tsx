import { Link, purpleParagraphIcon, redTrashIcon } from "..";
import { useConfirmDelete } from "../hooks/useConfirmDeleteModal";
import { OrderItem } from "../models/Order";
import AccentText from "./AccentText";

interface Props {
  id: number;
  status: "قيد المعالجة" | "مقبول" | "مرفوض" | "مكتمل" | string;
  totalPrice: number;
  orderItems: OrderItem[];
  dateOfArrival: string;
  dateOfOrder: string;
}

const OrdersTableRow = ({
  id,
  status,
  totalPrice,
  orderItems,
  dateOfArrival,
  dateOfOrder,
}: Props) => {
  const { setIsShownConfirmDeleteModal, setId, setEndpoint } =
    useConfirmDelete();
  setEndpoint("Orders");

  let totalQty = 0;
  orderItems.map((order) => {
    totalQty += order.quantitiy;
  });

  return (
    <tr>
      <td>#{id}</td>
      <td>{dateOfOrder.substring(0, 10)}</td>
      <td className="min-w-52 max-w-52">
        {orderItems.map((orderItem, index) => (
          <span>{`${orderItem.productName}${
            index === orderItems.length - 1 ? "" : "،"
          } `}</span>
        ))}
      </td>
      <td>{totalQty}</td>
      <td>
        <AccentText>{totalPrice} ريال</AccentText>
      </td>
      <td>
        <div
          className={`mx-auto py-1 px-3 rounded-full max-w-28 text-center
            ${
              status === "مكتمل"
                ? "bg-green-200"
                : status === "مقبول"
                ? "bg-yellow-200"
                : status === "قيد المعالجة"
                ? "bg-orange-200"
                : status === "مرفوض"
                ? "bg-red-200"
                : ""
            }`}
        >
          {status}
        </div>
      </td>
      <td>{dateOfArrival}</td>
      <td>
        <div className="mx-auto flex justify-center gap-4">
          <Link
            to={`/admin/order/${id}`}
            className="flex items-center justify-center"
          >
            <img src={purpleParagraphIcon} alt="" />
          </Link>
          <button
            onClick={() => {
              setId(id);
              setIsShownConfirmDeleteModal(true);
            }}
          >
            <img src={redTrashIcon} alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrdersTableRow;
