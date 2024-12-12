import {
  saleImg01,
  saleImg02,
  saleImg03,
  percentIcon,
  RoundButton,
  useState,
  useEffect,
} from "..";

const SalesSlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative grid rounded-3xl overflow-hidden w-2/3 h-2/3">
      <div className="absolute right-0 z-10 flex flex-col items-center justify-center rounded-3xl h-full w-2/5 bg-opacity-35 bg-black">
        <div className="text-white text-4xl font-bold transition-all duration-700">
          <br />
          <h1>إضاءة حديثة</h1>
          <br />
          <h1 className="flex">
            خصم 40% <img src={percentIcon} alt="" />
          </h1>
          <br />
        </div>
        <RoundButton>تسوق الآن</RoundButton>
      </div>
      <img
        className={
          index === 0
            ? "w-full h-full object-cover absolute opacity-100 transition-opacity duration-1000"
            : "w-full h-full object-cover absolute opacity-0 transition-opacity duration-1000"
        }
        src={saleImg01}
        alt=""
      />
      <img
        className={
          index === 1
            ? "w-full h-full object-cover absolute opacity-100 transition-opacity duration-1000"
            : "w-full h-full object-cover absolute opacity-0 transition-opacity duration-1000"
        }
        src={saleImg02}
        alt=""
      />
      <img
        className={
          index === 2
            ? "w-full h-full object-cover absolute opacity-100 transition-opacity duration-1000"
            : "w-full h-full object-cover absolute opacity-0 transition-opacity duration-1000"
        }
        src={saleImg03}
        alt=""
      />

      <div className="absolute bottom-0 pb-4 justify-self-center flex gap-6">
        <button onClick={() => setIndex(0)}>
          <div
            className={
              index === 0
                ? "w-4 h-4 rounded-full bg-black transition-all duration-700"
                : "shadow w-4 h-4 rounded-full bg-white transition-all duration-700"
            }
          />
        </button>
        <button onClick={() => setIndex(1)}>
          <div
            className={
              index === 1
                ? "w-4 h-4 rounded-full bg-black transition-all duration-700"
                : "shadow w-4 h-4 rounded-full bg-white transition-all duration-700"
            }
          />
        </button>
        <button onClick={() => setIndex(2)}>
          <div
            className={
              index === 2
                ? "w-4 h-4 rounded-full bg-black transition-all duration-700"
                : "shadow w-4 h-4 rounded-full bg-white transition-all duration-700"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default SalesSlideShow;
