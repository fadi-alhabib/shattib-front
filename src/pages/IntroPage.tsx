import {
  firstPageBanner,
  shattibLogoRow,
  earthIcon,
  shattibTextDecoration,
  RegisterCompanyCard,
  RegisterPersonCard,
  Link,
} from "..";

const IntroPage = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div>
          <img className="w-screen" src={firstPageBanner} alt="" />
        </div>
        <div className="absolute w-full flex flex-row justify-between items-start p-8">
          <img src={shattibLogoRow} alt="" />
          <div className="flex items-center">
            <span>EN</span>
            <img className="ps-2" src={earthIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-24">
        <img className="pt-2" src={shattibTextDecoration} alt="" />
        <span className="pt-2">منصة شاملة لطلب مواد التشطيب بسهولة وسرعة</span>
        <span className="pt-8 pe-16 font-bold">اختر نوع الحساب</span>
        <div className="flex place-self-center justify-evenly w-2/3 pt-8 max-lg:flex-col max-lg:h-svh">
          <Link to={"/register"}>
            <RegisterCompanyCard />
          </Link>
          <Link to={"/register"}>
            <RegisterPersonCard />
          </Link>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
