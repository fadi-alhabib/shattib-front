import {
  ButtonGold,
  DropDownMenu,
  Link,
  MainPadding,
  QuantityControls,
  TextInput,
  UploadFile,
} from "..";

const PriceRequestPage = () => {
  return (
    <main>
      <MainPadding>
        <h1 className="text-2xl font-bold">طلب عرض سعر</h1>

        <section className="w-full flex items-center justify-center m-8">
          <div className="flex items-center justify-center rounded-full bg-gray-100 w-72 h-12">
            <div className="h-8 w-8 rounded-full bg-yellow-600 text-white flex justify-center items-center">
              1
            </div>
            <div className="h-1 w-16 bg-yellow-600" />
            <div className="h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center">
              2
            </div>
          </div>
        </section>

        <h2 className="text-xl font-bold">المعلومات الأساسية</h2>

        <div className="flex w-full gap-4 my-4">
          <div className="w-full">
            <DropDownMenu
              title="اسم المنتج"
              placeholder="أدخل أو اختر اسم المنتج"
            />
          </div>
          <div className="w-full">
            <label className="flex self-start mb-2 text-sm">الكمية</label>
            <div className="flex flex-col border rounded p-2">
              <div className="w-36 self-end">
                <QuantityControls />
              </div>
            </div>
          </div>
          <div className="w-full">
            <DropDownMenu title="الوحدة" />
          </div>
        </div>

        <div className="flex w-full h-64 gap-4 my-10">
          <div className="w-full">
            <TextInput
              big
              blackTitle
              title="تفاصيل أخرى"
              placeholder="أدخل معلومات وتفاصيل أكثر عن الطلب والنوعية"
            />
          </div>

          <div className="w-1/2">
            <UploadFile title="إرفاق الملفات" subTitle="أضف ملف أو صورة" />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="w-32 self-end">
            <Link to={"/price-request-2"}>
              <ButtonGold>التالي</ButtonGold>
            </Link>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default PriceRequestPage;
