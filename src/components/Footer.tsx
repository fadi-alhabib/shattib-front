import {
  facebookIcon,
  youtubeIcon,
  instagramIcon,
  linkedinIcon,
  telegramIcon,
  whatsappIcon,
  shattibLogoCol,
  paragraphPlaceholder,
} from "..";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around w-full py-32 bg-slate-800">
      <div className="flex flex-col gap-4">
        <img src={shattibLogoCol} alt="" />
        <div className="flex items-center gap-1">
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={youtubeIcon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={telegramIcon} alt="" />
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className="flex gap-8 h-1/2">
        <img src={paragraphPlaceholder} alt="" />
        <img src={paragraphPlaceholder} alt="" />
        <img src={paragraphPlaceholder} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
