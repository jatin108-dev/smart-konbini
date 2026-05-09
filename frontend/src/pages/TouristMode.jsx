import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import CurrencyConverter from "../components/CurrencyConverter";

const TouristMode = () => {

  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-[#f6f1eb] overflow-x-hidden font-['Outfit']">

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 md:px-20 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#c75c5c] opacity-20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >

          <p className="uppercase tracking-[6px] text-[#c75c5c] text-xs mb-5">

            {language === "en"
              ? "Tourist Assistance"
              : "観光サポート"}

          </p>

          <h1 className="text-[48px] sm:text-[65px] md:text-[95px] leading-[0.92] font-black text-[#2b2b2b] max-w-6xl">

            {language === "en"
              ? "Explore Japan Like A Local"
              : "地元のように日本を探索"}

          </h1>

          <p className="mt-7 text-[#666] text-base md:text-lg max-w-2xl leading-relaxed">

            {language === "en"
              ? "Smart tools and cultural guidance designed for international travelers visiting Japan."
              : "日本を訪れる旅行者向けのスマートツールと文化ガイド。"}

          </p>

        </motion.div>

      </section>

      {/* GRID */}
      <section className="px-5 md:px-20 pb-20 md:pb-28">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-auto md:auto-rows-[420px]">

          {/* CURRENCY */}
          <motion.div
            whileHover={{ y: -8 }}
            className="md:col-span-2 md:row-span-2"
          >

            <CurrencyConverter />

          </motion.div>

          {/* PHRASE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#111111] rounded-[35px] overflow-hidden relative text-white min-h-[320px]"
          >

            <img
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">

              <div>

                <p className="uppercase tracking-[5px] text-[#c75c5c] text-xs">

                  {language === "en"
                    ? "Useful Phrase"
                    : "便利なフレーズ"}

                </p>

                <h2 className="text-4xl md:text-5xl font-black mt-8">
                  ありがとう
                </h2>

                <p className="mt-4 text-xl md:text-2xl text-gray-300">
                  Thank You
                </p>

              </div>

            </div>

          </motion.div>

          {/* ETIQUETTE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#e7dccf] rounded-[35px] p-8 relative overflow-hidden min-h-[320px]"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
              alt=""
              className="absolute bottom-5 right-5 w-28 md:w-36 opacity-20"
            />

            <p className="uppercase tracking-[5px] text-xs">

              {language === "en"
                ? "Etiquette"
                : "マナー"}

            </p>

            <h2 className="text-3xl md:text-4xl font-black mt-8 text-[#2b2b2b]">

              {language === "en"
                ? "Queue Properly"
                : "きちんと並ぶ"}

            </h2>

            <p className="mt-5 text-[#555] leading-relaxed text-base md:text-lg">

              {language === "en"
                ? "Please line up and be patient."
                : "きちんと並んで待ちましょう。"}

            </p>

          </motion.div>

          {/* FOODS */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 bg-white rounded-[35px] p-6 md:p-8 shadow-xl border border-[#efe4d8]"
          >

            <p className="uppercase tracking-[5px] text-[#c75c5c] text-xs">

              {language === "en"
                ? "Must Try Foods"
                : "おすすめフード"}

            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

              {[
                {
                  name: "Onigiri",
                  img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  name: "Matcha",
                  img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  name: "Bento",
                  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  name: "Ramen",
                  img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((food, index) => (
                <div key={index}>

                  <img
                    src={food.img}
                    alt=""
                    className="h-28 md:h-32 w-full object-cover rounded-[22px]"
                  />

                  <h3 className="mt-3 font-semibold text-base md:text-lg">
                    {food.name}
                  </h3>

                </div>
              ))}

            </div>

          </motion.div>

          {/* MAP */}
          {/* MAP */}
<motion.div
  whileHover={{ y: -8 }}
  className="md:col-span-2 rounded-[35px] overflow-hidden relative text-white min-h-[520px]"
>

  {/* BACKGROUND IMAGE */}
  <img
    src="https://static.vecteezy.com/system/resources/previews/003/330/735/non_2x/japan-map-silhouette-with-flag-on-black-background-free-vector.jpg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* CONTENT */}
  <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-14">

    <div>

      <p className="uppercase tracking-[6px] text-[#ffb4b4] text-xs">

        {language === "en"
          ? "Nearby Stores"
          : "近くの店舗"}

      </p>

      <h2 className="text-4xl md:text-6xl font-black mt-8 leading-[0.95] max-w-2xl">

        {language === "en"
          ? "Find Konbinis Across Japan"
          : "日本全国のコンビニを探す"}

      </h2>

      <p className="mt-7 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">

        {language === "en"
          ? "Discover nearby convenience stores and tourist-friendly locations across Japan."
          : "日本全国の観光客向けコンビニを検索。"}

      </p>

    </div>

    {/* BUTTON */}
    <div className="mt-10">

      <button className="bg-[#c75c5c] hover:bg-[#b65050] transition px-8 py-4 rounded-full text-base md:text-lg font-medium shadow-xl backdrop-blur-md">

        {language === "en"
          ? "View Map"
          : "地図を見る"}

      </button>

    </div>

  </div>

</motion.div>

        </div>

      </section>

    </main>
  );
};

export default TouristMode;