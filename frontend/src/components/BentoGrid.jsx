import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const BentoGrid = () => {

  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className="bg-[#f6f1eb] px-6 md:px-20 py-28">

      {/* TOP */}
      <div className="mb-20">

        <p className="uppercase tracking-[7px] text-[#c75c5c] text-xs mb-5">
          {t.modernTag}
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-[#111111]">
          {t.modernTitle}
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">

        {/* BIG CARD */}
        <motion.div
          whileHover={{ y: -8 }}
          className="md:col-span-2 md:row-span-2 bg-[#111111] rounded-[40px] p-10 text-white relative overflow-hidden"
        >

          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#c75c5c] opacity-20 blur-3xl rounded-full"></div>

          <p className="uppercase text-xs tracking-[5px] text-gray-400">

            {language === "en"
              ? "Tourist Mode"
              : "ツーリストモード"}

          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">

            {language === "en"
              ? "Explore Japan Without Barriers"
              : "壁なしで日本を探索"}

          </h2>

          <p className="mt-6 text-gray-300 max-w-md leading-relaxed">

            {language === "en"
              ? "Multi-language experience designed for tourists discovering Japanese convenience culture."
              : "日本のコンビニ文化を発見する旅行者向けの多言語体験。"}

          </p>

        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-[35px] p-8 shadow-lg"
        >

          <p className="uppercase tracking-[5px] text-[#c75c5c] text-xs">

            {language === "en"
              ? "Currency"
              : "通貨"}

          </p>

          <h2 className="text-3xl font-bold mt-5 text-[#111111]">

            {language === "en"
              ? "Real-Time Converter"
              : "リアルタイム変換"}

          </h2>

          <p className="text-gray-500 mt-4">

            {language === "en"
              ? "Instantly view Japanese prices in your own currency."
              : "自国通貨で日本の価格を確認。"}

          </p>

        </motion.div>

        {/* CARD 3 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-[#e7dccf] rounded-[35px] p-8"
        >

          <p className="uppercase tracking-[5px] text-[#111111] text-xs">

            {language === "en"
              ? "Store Finder"
              : "店舗検索"}

          </p>

          <h2 className="text-3xl font-bold mt-5 text-[#111111]">

            {language === "en"
              ? "Nearby Konbinis"
              : "近くのコンビニ"}

          </h2>

          <p className="text-gray-700 mt-4">

            {language === "en"
              ? "Discover stores across Japan in seconds."
              : "日本全国の店舗を素早く発見。"}

          </p>

        </motion.div>

        {/* CARD 4 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 bg-white rounded-[35px] p-8 shadow-lg flex flex-col justify-between"
        >

          <div>

            <p className="uppercase tracking-[5px] text-[#c75c5c] text-xs">

              {language === "en"
                ? "Japanese Favorites"
                : "日本のお気に入り"}

            </p>

            <h2 className="text-4xl font-black mt-5 text-[#111111]">

              {language === "en"
                ? "Discover Trending Convenience Foods"
                : "人気コンビニフードを発見"}

            </h2>

          </div>

          <div className="flex gap-4 mt-8 flex-wrap">

            <div className="bg-[#f6f1eb] px-5 py-3 rounded-full">
              {language === "en" ? "Onigiri" : "おにぎり"}
            </div>

            <div className="bg-[#f6f1eb] px-5 py-3 rounded-full">
              {language === "en" ? "Matcha" : "抹茶"}
            </div>

            <div className="bg-[#f6f1eb] px-5 py-3 rounded-full">
              {language === "en" ? "Bento" : "弁当"}
            </div>

          </div>

        </motion.div>

        {/* CARD 5 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-[#111111] rounded-[35px] p-8 text-white"
        >

          <p className="uppercase tracking-[5px] text-gray-400 text-xs">

            {language === "en"
              ? "Availability"
              : "利用可能"}

          </p>

          <h2 className="text-5xl font-black mt-5">
            24/7
          </h2>

          <p className="text-gray-300 mt-4">

            {language === "en"
              ? "Smart convenience anytime anywhere."
              : "いつでもどこでも便利。"}

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default BentoGrid;