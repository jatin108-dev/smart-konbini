import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Footer = () => {

  const { language } = useLanguage();

  const t = translations[language];

  return (
    <footer className="bg-[#111111] text-white px-6 md:px-20 pt-28 pb-10 rounded-t-[50px] mt-20">

      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-14">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[7px] text-gray-400 text-xs mb-5">
            Smart Konbini
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
            {t.footerTitle}
          </h1>

        </div>

        {/* RIGHT */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white text-[#111111] rounded-[35px] p-8 w-full md:w-[380px]"
        >

          <p className="uppercase tracking-[5px] text-[#c75c5c] text-xs">

            {language === "en"
              ? "Tourist Mode"
              : "ツーリストモード"}

          </p>

          <h2 className="text-3xl font-black mt-5">

            {language === "en"
              ? "Start Exploring"
              : "探索を始める"}

          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {t.footerDesc}
          </p>

          <button className="mt-8 bg-[#111111] text-white px-7 py-4 rounded-full hover:scale-105 transition">

            {language === "en"
              ? "Explore Now"
              : "今すぐ探索"}

          </button>

        </motion.div>

      </div>

      {/* LINE */}
      <div className="h-[1px] bg-gray-800 my-16"></div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-gray-400 text-sm">

        <p>

          {language === "en"
            ? "© 2026 Smart Konbini. Inspired by Japanese convenience culture."
            : "© 2026 スマートコンビニ。日本のコンビニ文化にインスパイア。"}

        </p>

        <div className="flex gap-8">

          <a href="#" className="hover:text-white transition">
            {t.products}
          </a>

          <a href="#" className="hover:text-white transition">
            {t.stores}
          </a>

          <a href="#" className="hover:text-white transition">
            {t.touristMode}
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;