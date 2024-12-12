import {
  ProductListHorizontal,
  ProductDetailsCard,
  LeftRightButtonsCircle,
  MainPadding,
  SectionTitles,
  useApi,
  useParams,
} from "..";
import { Product } from "../models/Product";

const ProductPage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useApi<Product>(`Products/${id}`);
  return (
    <main>
      <MainPadding>
        <SectionTitles
          title01="الأدوات الصحية"
          title02="طقم شطاف"
          endTitle="طقم شطاف WG006"
        />
        <section className="flex justify-center items-center h-screen my-16">
          {isLoading ? (
            <span className="text-4xl font-bold">جاري التحميل...</span>
          ) : error ? (
            <ProductDetailsCard />
          ) : data ? (
            <ProductDetailsCard data={data} />
          ) : null}
        </section>
        <section className="flex flex-col gap-8 py-8">
          <h1 className="text-3xl font-bold">الوصف</h1>
          <p className="text-2xl">
            {data?.description}
            {/* طقم شطاف هو منتج أساسي للحمام يهدف إلى تقديم تجربة تنظيف شخصية صحية
            وسهلة الاستخدام. يتكون الطقم من شطاف يدوي مصنوع من مواد عالية
            الجودة، يضمن المتانة والفعالية في الأداء. يمكن تثبيت الشطاف بسهولة
            بجانب المرحاض ويوفر تدفقًا مائيًا مضبوطًا يمكن التحكم به لتلبية
            احتياجات النظافة الشخصية. يتميز الطقم بتصميم عصري ينسجم مع ديكور
            الحمام، كما أنه يوفر راحة كبيرة للمستخدمين بفضل سهولة الاستخدام
            والتحكم الكامل في تدفق المياه. سواء كنت تبحث عن حلول نظافة شخصية أو
            إضافة عملية لحمامك، فإن طقم الشطاف يعد اختيارًا مثاليًا يجمع بين
            الجودة والأداء. */}
          </p>
        </section>
        <section className="py-8">
          <h1 className="text-3xl font-bold mb-8">منتجات متشابهة</h1>
          <ProductListHorizontal />
          <LeftRightButtonsCircle />
        </section>
      </MainPadding>
    </main>
  );
};

export default ProductPage;
