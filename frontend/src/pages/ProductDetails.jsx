import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { products } from "../data/products";

const ProductDetails = () => {

  const { id } = useParams();

  const { language } = useLanguage();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f1eb] font-['Outfit'] overflow-x-hidden">

      <Navbar />

      <section className="px-6 md:px-20 pt-36 pb-20">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <img
              src={product.image}
              alt=""
              className="w-full rounded-[40px] shadow-2xl"
            />

          </div>

          {/* CONTENT */}
         {/* CONTENT */}
<div>

  <p className="uppercase tracking-[6px] text-[#c75c5c] text-xs">

    {language === "en"
      ? product.categoryEn
      : product.categoryJp}

  </p>

  <h1 className="text-[55px] leading-[1] font-black text-[#2b2b2b] mt-6">

    {language === "en"
      ? product.titleEn
      : product.titleJp}

  </h1>

  <p className="text-3xl mt-8 font-semibold text-[#444]">
    {product.price}
  </p>

  <p className="mt-8 text-lg leading-relaxed text-[#666] max-w-xl">

    {language === "en"
      ? product.descEn
      : product.descJp}

  </p>

  {/* TAGS */}
  <div className="flex gap-4 flex-wrap mt-10">

    <div className="bg-[#fffaf5] border border-[#eadfd3] px-5 py-3 rounded-full text-sm">

      {language === "en"
        ? "Fresh Daily"
        : "毎日新鮮"}

    </div>

    <div className="bg-[#fffaf5] border border-[#eadfd3] px-5 py-3 rounded-full text-sm">

      {language === "en"
        ? "Japanese Favorite"
        : "日本の人気"}

    </div>

    <div className="bg-[#fffaf5] border border-[#eadfd3] px-5 py-3 rounded-full text-sm">

      {language === "en"
        ? "Tourist Pick"
        : "旅行者人気"}

    </div>

  </div>

  {/* BUTTONS */}
  <div className="flex gap-5 mt-12 flex-wrap">

    <button className="bg-[#2b2b2b] text-white px-10 py-5 rounded-full hover:scale-105 transition">

      {language === "en"
        ? "Reserve Product"
        : "商品を予約"}

    </button>

    <button className="bg-white border border-[#e5d9cd] px-8 py-5 rounded-full hover:bg-[#f3ebe3] transition">

      ♡

    </button>

  </div>

</div>

        </div>

      </section>

    </main>
  );
};

export default ProductDetails;