import {
  cluLogo,
  dewareLogo,
  highBuildLogo,
  pinlocLogo,
  prewLogo,
  vblockLogo,
  zonexLogo,
} from "..";

const CompaniesBanner = () => {
  return (
    <div className="my-32">
      <h1 className="text-3xl font-bold text-gray-800 my-8 ps-8">الشركات</h1>
      <div className="relative flex items-center justify-center">
        <div className="w-full">
          <div className="w-full h-56 bg-amber-100 bg-opacity-50" />
          {/* <div className="w-full h-32 bg-amber-100 bg-opacity-50" />
          <div className="w-full h-16 bg-amber-200 bg-opacity-50" /> */}
        </div>
        <div className="absolute w-full px-32 flex items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={prewLogo} alt="" />
            prew
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={cluLogo} alt="" />
            clu
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={highBuildLogo} alt="" />
            High Build
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={dewareLogo} alt="" />
            Deware
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={pinlocLogo} alt="" />
            PinLoc
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={zonexLogo} alt="" />
            ZoneX
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={vblockLogo} alt="" />V Block
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesBanner;
