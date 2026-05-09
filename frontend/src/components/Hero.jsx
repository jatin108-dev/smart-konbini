import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Hero = () => {

  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className="min-h-screen bg-[#f6f1eb] relative overflow-hidden flex items-center px-6 md:px-20">

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

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:flex justify-center items-center h-[600px]"
        >

          {/* BIG CARD */}
          <div className="w-[320px] bg-white rounded-[35px] shadow-2xl overflow-hidden z-20">

            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
              alt=""
              className="h-[380px] w-full object-cover"
            />

            <div className="p-6">

              <p className="uppercase text-xs tracking-[5px] text-[#c75c5c]">
                Trending
              </p>

              <h2 className="text-3xl font-bold mt-3 text-[#111111]">
                Matcha Dessert
              </h2>

              <p className="text-gray-500 mt-3">
                Tokyo’s favorite sweet pick loved by tourists.
              </p>

            </div>

          </div>

          {/* FLOATING CARD */}
          <div className="absolute top-16 left-0 bg-[#111111] text-white p-6 rounded-[30px] shadow-xl rotate-[-8deg]">

            <h2 className="text-4xl font-black">
              24/7
            </h2>

            <p className="mt-2 text-gray-300 text-sm">
              Smart convenience
            </p>

          </div>

          {/* FLOATING BADGE */}
          <div className="absolute bottom-10 right-0 bg-white p-5 rounded-[25px] shadow-xl rotate-[8deg]">

            <p className="text-sm text-[#c75c5c] uppercase tracking-widest">
              Must Try
            </p>

            <h2 className="font-bold text-xl mt-2">
              Egg Sandwich
            </h2>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;