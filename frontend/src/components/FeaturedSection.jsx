import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const foods = [
  {
    titleEn: "Onigiri",
    titleJp: "おにぎり",

    subtitleEn: "Classic Japanese rice snack",
    subtitleJp: "日本の定番ライススナック",

    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec",
  },

  {
    titleEn: "Matcha Dessert",
    titleJp: "抹茶デザート",

    subtitleEn: "Tokyo’s trending sweet choice",
    subtitleJp: "東京で人気のスイーツ",

    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
  },

  {
    titleEn: "Egg Sandwich",
    titleJp: "たまごサンド",

    subtitleEn: "Famous konbini favorite",
    subtitleJp: "人気コンビニフード",

    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
  },
];

const FeaturedSection = () => {

  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className="bg-[#fffaf5] py-28 px-6 md:px-20">

      {/* TOP */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">

        <div>

          <p className="uppercase tracking-[7px] text-[#c75c5c] text-xs mb-5">
            {t.featuredTag}
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-[#111111]">
            {t.featuredTitle}
          </h1>

        </div>

        <p className="max-w-md text-gray-600 text-lg leading-relaxed">
          {t.featuredDesc}
        </p>

      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10">

        {foods.map((food, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.3 }}
            className="group"
          >

            <div className="bg-white rounded-[35px] overflow-hidden shadow-lg">

              <div className="overflow-hidden">

                <img
                  src={food.image}
                  alt=""
                  className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="p-7">

                <div className="flex justify-between items-start">

                  <div>

                    <h2 className="text-2xl font-bold text-[#111111]">

                      {language === "en"
                        ? food.titleEn
                        : food.titleJp}

                    </h2>

                    <p className="text-gray-500 mt-3">

                      {language === "en"
                        ? food.subtitleEn
                        : food.subtitleJp}

                    </p>

                  </div>

                  <button className="w-12 h-12 rounded-full bg-[#111111] text-white text-lg hover:scale-110 transition">
                    ↗
                  </button>

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default FeaturedSection;