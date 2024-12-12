import { AccentText, Link, subCategoryImg01 } from "..";

interface Props {
  id?: number;
  status: "معلًقة" | "مقبولة" | "مرفوضة";
}

const ConditionCard = ({ id = 0, status }: Props) => {
  return (
    <Link to={`doc/${id}`}>
      <div className="w-72 h-72 flex flex-col justify-between rounded-xl bg-gray-100 shadow p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold self-center">كراسة مواد بناء</h1>
          <hr />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>عدد التصنيفات</span>
              <AccentText size="sm">3</AccentText>
            </div>
            <div className="flex gap-2">
              <span>الحالة</span>
              <span
                className={
                  status === "معلًقة"
                    ? "font-bold text-blue-600"
                    : status === "مقبولة"
                    ? "font-bold text-green-600"
                    : status === "مرفوضة"
                    ? "font-bold text-red-600"
                    : "font-bold"
                }
              >
                {status}
              </span>
            </div>
          </div>
        </div>
        <div className="px-2 pt-2 h-40">
          <img
            className="rounded-xl object-cover w-full h-full"
            src={subCategoryImg01}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default ConditionCard;
