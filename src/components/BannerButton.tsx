import { ButtonGold, expandCoverImg03, useEngineerRequest } from "..";

const BannerButton = () => {
  const { setIsShownEngineerRequestModal } = useEngineerRequest();
  return (
    <div className="relative grid rounded-3xl overflow-hidden w-2/3 h-2/3">
      <div className="absolute right-4 w-32 h-28 bg-black bg-opacity-25 rounded-bl rounded-br z-20">
        <div className="h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl">توسيع</h1>
          <h1 className="text-2xl">مساحة</h1>
        </div>
      </div>
      <div className="absolute right-0 z-10 flex flex-col items-center justify-center rounded-3xl h-full w-full bg-opacity-35 bg-black">
        <div className="w-5/6 text-white text-4xl font-bold transition-all duration-700">
          <h1>
            "احصل على استشارة احترافية من مهندسين ذوي خبرة لرفع مساحة مشاريعك .
          </h1>
          <h1>اطلب استشارتك الآن وحقق رؤيتك بدعم من الخبراء."</h1>
        </div>
        <br />
        <br />
        <div
          onClick={() => setIsShownEngineerRequestModal(true)}
          className="flex w-44 h-12 shadow"
        >
          <ButtonGold>طلب استشارة</ButtonGold>
        </div>
      </div>
      <img
        className="w-full h-full object-cover absolute opacity-100 blur-sm"
        src={expandCoverImg03}
        alt=""
      />
    </div>
  );
};

export default BannerButton;
