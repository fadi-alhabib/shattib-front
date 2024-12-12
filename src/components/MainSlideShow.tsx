import {
  mainCoverImg01,
  mainCoverImg02,
  mainCoverImg03,
  useState,
  useEffect,
} from "..";

const MainSlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="h-full w-full relative grid overflow-hidden">
      <div className="absolute top-0 w-full h-full bg-black opacity-50 z-10" />

      <img
        className={
          index === 0
            ? "w-full h-full object-cover absolute opacity-100 transition-opacity duration-1000"
            : "w-full h-full object-cover absolute opacity-0 transition-opacity duration-1000"
        }
        src={mainCoverImg01}
        alt=""
      />
      <img
        className={
          index === 1
            ? "w-full h-full object-cover absolute opacity-100 transition-opacity duration-1000"
            : "w-full h-full object-cover absolute opacity-0 transition-opacity duration-1000"
        }
        src={mainCoverImg02}
        alt=""
      />
      <img
        className={
          index === 2
            ? "w-full h-full object-cover absolute opacity-100 transition-opacity duration-1000"
            : "w-full h-full object-cover absolute opacity-0 transition-opacity duration-1000"
        }
        src={mainCoverImg03}
        alt=""
      />

      <div className="absolute bottom-0 pb-8 justify-self-center flex gap-6 z-20">
        <button onClick={() => setIndex(0)}>
          <div
            className={
              index === 0
                ? "w-6 h-6 rounded-full bg-primary transition-all duration-700"
                : "shadow w-6 h-6 rounded-full bg-white transition-all duration-700"
            }
          />
        </button>
        <button onClick={() => setIndex(1)}>
          <div
            className={
              index === 1
                ? "w-6 h-6 rounded-full bg-primary transition-all duration-700"
                : "shadow w-6 h-6 rounded-full bg-white transition-all duration-700"
            }
          />
        </button>
        <button onClick={() => setIndex(2)}>
          <div
            className={
              index === 2
                ? "w-6 h-6 rounded-full bg-primary transition-all duration-700"
                : "shadow w-6 h-6 rounded-full bg-white transition-all duration-700"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default MainSlideShow;
