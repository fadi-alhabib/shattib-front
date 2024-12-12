import { useState, loginIcon } from "..";

interface Props {
  image: string;
  title: string;
  desc: string;
  footer: string;
  color: "amber" | "sky";
}

const RegisterCard = ({ image, title, desc, footer, color }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      dir="rtl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`w-72 rounded-lg border shadow-md transition-all duration-700 hover:bg-${color}-700 hover:scale-y-105`}
    >
      <div className="relative flex justify-center">
        <div
          className={
            hover
              ? `w-72 min-h-12 rounded-md bg-${color}-600 transition-all duration-700`
              : `w-72 min-h-12 rounded-md bg-${color}-100 transition-all duration-700`
          }
        ></div>
        <img className="absolute bottom-0" src={image} alt="" />
      </div>
      <div className="p-4 min-h-36 flex flex-col justify-between items-start">
        <h1
          className={
            hover
              ? "text-white font-bold transition-all duration-700"
              : "font-bold transition-all duration-700"
          }
        >
          {title}
        </h1>
        <span
          className={
            hover
              ? "text-white text-sm transition-all duration-700"
              : "text-sm transition-all duration-700"
          }
        >
          {desc}
        </span>
        <span
          className={
            hover
              ? "text-white flex self-end transition-all duration-700"
              : "flex self-end transition-all duration-700"
          }
        >
          {footer}{" "}
          <img
            className={
              hover
                ? "ps-2 transition-all duration-700"
                : "-translate-x-10 transition-all duration-700"
            }
            src={loginIcon}
          />
        </span>
      </div>
    </div>
  );
};

export default RegisterCard;
