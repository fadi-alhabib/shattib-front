import {
  shattibText,
  shattibGoldIcon,
  CompaniesBanner,
  doubleLeftArrowIcon,
  ProductListHorizontal,
  CategoryListHorizontal,
  TitleNumber,
  CategoriesButtonListHorizontal,
  LeftRightButtonsCircle,
  MainSlideShow,
  BannerButton,
  categoryImg01,
  CategoryCard,
  Link,
  categoryImg02,
  categoryImg03,
  categoryImg04,
} from "..";

const HomePage = () => {
  return (
    <>
      <div>
        <section className="h-screen">
          <div className="relative h-full pb-32 overflow-hidden">
            <MainSlideShow />
            {/* <video
              className="w-full h-full object-cover"
              src={video01}
              autoPlay
              loop
            /> */}
            <div className="absolute top-0 pt-32 ps-32 flex flex-col gap-8 z-20">
              <img className="w-64" src={shattibText} />
              <span className="text-2xl text-white font-bold">
                منصة شاملة لطلب مواد التشطيب بسهولة وسرعة
              </span>
              <p className="text-2xl text-white">
                تسهيل عملية طلب العينات وإتمام عمليات الشراء بطريقة
                <br /> مريحة وفعالة، والتأكد من توفر العينات أو المنتجات
                <br /> المطلوبة قبل إتمام الحجز.
              </p>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center h-screen">
          <div className="absolute -z-10 h-48 w-full bg-amber-100" />
          <BannerButton />
        </section>

        {/* <section className="flex items-center justify-center h-screen">
          <div className="relative w-full h-2/3 overflow-hidden">
            <div className="absolute flex flex-col justify-center gap-8 ps-16 z-10 w-full h-full bg-black bg-opacity-50">
              <span className="text-4xl text-white font-bold">
                "احصل على استشارة احترافية من مهندسين ذوي خبرة
                <br /> لرفع مساحة مشاريعك . اطلب استشارتك الآن وحقق
                <br /> رؤيتك بدعم من الخبراء."
              </span>
              <div className="w-44">
                <ButtonGold>طلب رفع مساحة</ButtonGold>
              </div>
            </div>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              src={video02}
            ></video>
          </div>
        </section> */}

        <section className="p-8">
          <div className="flex items-center mb-4">
            <img className="me-2" src={shattibGoldIcon} alt="" />
            <div className="me-2 h-16 w-2 bg-yellow-200" />
            <TitleNumber subTitle="17">التصنيفات</TitleNumber>
          </div>

          <CategoriesButtonListHorizontal />

          {/* CATEGORIES HORIZONTAL LIST */}
          <section className="pt-16">
            <div className="mb-16">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">الرخام</h1>
              <div className="flex gap-4 mb-8">
                <h2 className="text-4xl font-bold text-gray-500">
                  التصنيفات الفرعية
                </h2>
                <h2 className="text-4xl font-bold text-gray-300">4</h2>
              </div>
              <div className="flex gap-8">
                <Link to={"/admin/category/1"}>
                  <CategoryCard img={categoryImg01} num="8">
                    رخام الأرضيات الداخلية والخارجية
                  </CategoryCard>
                </Link>
                <CategoryCard img={categoryImg02} num="8">
                  رخام المطابخ والحمامات
                </CategoryCard>
                <CategoryCard img={categoryImg03} num="8">
                  رخام الجدران
                </CategoryCard>
                <CategoryCard img={categoryImg04} num="8">
                  رخام الواجهات
                </CategoryCard>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-between py-8">
            <TitleNumber version={2} subTitle="500 منتج">
              المتنجات
            </TitleNumber>
            <div className="flex">
              <span className="p-4">عرض الكل</span>
              <img src={doubleLeftArrowIcon} alt="" />
            </div>
          </div>
          <ProductListHorizontal />
          {/* <LeftRightButtonsCircle /> */}

          {/* CATEGORIES HORIZONTAL LIST */}
          <section className="mt-32">
            <div className="mb-16">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">الرخام</h1>
              <div className="flex gap-4 mb-8">
                <h2 className="text-4xl font-bold text-gray-500">
                  التصنيفات الفرعية
                </h2>
                <h2 className="text-4xl font-bold text-gray-300">4</h2>
              </div>
              <div className="flex gap-8">
                <Link to={"/admin/category/1"}>
                  <CategoryCard img={categoryImg01} num="8">
                    رخام الأرضيات الداخلية والخارجية
                  </CategoryCard>
                </Link>
                <CategoryCard img={categoryImg02} num="8">
                  رخام المطابخ والحمامات
                </CategoryCard>
                <CategoryCard img={categoryImg03} num="8">
                  رخام الجدران
                </CategoryCard>
                <CategoryCard img={categoryImg04} num="8">
                  رخام الواجهات
                </CategoryCard>
              </div>
            </div>
          </section>
        </section>

        <section className="p-8">
          <TitleNumber version={2} subTitle="20">
            التصنيفات الفرعية
          </TitleNumber>
          <CategoryListHorizontal />
          <LeftRightButtonsCircle />
        </section>
        {/* <div className="flex flex-row-reverse pe-8">
          <img src={doubleLeftArrowIcon} alt="" />
          <span className="p-4">عرض جميع التصنيفات</span>
        </div> */}

        <CompaniesBanner />
      </div>
    </>
  );
};

export default HomePage;
