import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Hero = () => {

  const { language } = useLanguage();

  const t = translations[language];

  return (
   <section
  className="min-h-screen relative overflow-hidden flex items-center px-6 md:px-20"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,245,247,0.35), rgba(255,245,247,0.35)),
      url('/mountfuji.jpg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      {/* BLUR */}
      <div className="absolute top-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#c75c5c] opacity-20 blur-3xl rounded-full"></div>

      <div className="grid md:grid-cols-2 items-center gap-16 w-full">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >

          <p className="uppercase tracking-[7px] text-[#c75c5c] text-xs mb-5">
            {t.heroTag}
          </p>

          <h1 className="text-[55px] md:text-[95px] leading-[0.95] font-black text-[#111111]">
            {t.heroTitle}
          </h1>

          <p className="mt-7 text-gray-600 text-lg leading-relaxed max-w-xl">
            {t.heroDesc}
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">

            <button className="bg-[#111111] text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300">
              {t.exploreJapan}
            </button>

            <button className="border border-[#111111] px-8 py-4 rounded-full hover:bg-[#111111] hover:text-white transition duration-300">
              {t.touristMode}
            </button>

          </div>

        </motion.div>

        
      </div>

    </section>
  );
};

export default Hero;