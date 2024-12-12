import { ButtonGold, Link, MainPadding, TextInput } from "..";

const PriceRequestSecondPage = () => {
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
            <div className="h-8 w-8 rounded-full bg-yellow-600 text-white flex justify-center items-center">
              2
            </div>
          </div>
        </section>

        <div className="flex w-full gap-4 my-4">
          <div className="w-full">
            <TextInput
              blackTitle
              title="موقع المشروع"
              placeholder="حدد موقع المشروع"
            />
          </div>
          <div className="w-full" />
          <div className="w-full">
            <TextInput blackTitle title="تاريخ تنفيذ الطلب" />
          </div>
        </div>

        <div className="flex w-full gap-4 my-4">
          <div className="w-full">
            <TextInput blackTitle title="طريقة الدفع" placeholder="اختر" />
          </div>
          <div className="w-full">
            <TextInput blackTitle title="رقم الموبايل" />
          </div>
          <div className="w-full">
            <TextInput blackTitle title="البريد الالكتروني" />
          </div>
        </div>

        <div className="flex w-full h-64 gap-4 my-10">
          <div className="w-full">
            <TextInput big blackTitle title="معلومات إ ضافية" />
          </div>

          <div className="flex flex-col w-1/2 h-full gap-2">
            <div className="flex justify-center items-center w-full h-full">
              <div className="flex flex-col justify-center items-center gap-4" />
            </div>
          </div>
        </div>

        <hr className="border-2 mb-8" />

        <div className="flex flex-col w-full">
          <div className="flex items-center gap-6 self-end">
            <Link to={"/price-request"}>
              <button className="text-gray-500">السابق</button>
            </Link>
            <div className="w-32">
              <Link to={"/price-request-2"}>
                <ButtonGold>اطلب</ButtonGold>
              </Link>
            </div>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default PriceRequestSecondPage;
