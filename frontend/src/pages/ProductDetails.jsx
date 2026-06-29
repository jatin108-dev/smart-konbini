import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
//import { products } from "../data/products";
import { useState, useEffect } from "react";
// import axios from "axios";
// CART CONTEXT
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import api from "../api";

const ProductDetails = () => {

  const { id } = useParams();

const { language } = useLanguage();
const { currency, formatPrice } = useCurrency();

  // GET ADD TO CART FUNCTION
  const { addToCart } = useCart();

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {

  const fetchProduct = async () => {

    try {

      const response = await api.get(`/api/products/${id}`);
      setProduct(response.data.product);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  fetchProduct();

}, [id]);

// ADD PRODUCT TO MONGODB CART
const handleAddToCart = async () => {

  try {

    const response = await api.post(
       "/api/cart/add",

      {
        productId: product._id,
      },

      {
        withCredentials: true,
      }

    );

    console.log(response.data);

    alert("Product Added Successfully!");

  } catch (error) {

    console.log(error);

    alert(error.response?.data?.message || "Something went wrong.");

  }

};

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl">
      Loading...
    </div>
  );
}

if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        Product Not Found
      </div>
    );
  }

  return (
<main
  className="min-h-screen font-['Outfit'] overflow-x-hidden relative"
  style={{
    background: `
      radial-gradient(circle at top left, rgba(255,192,203,0.25), transparent 35%),
      radial-gradient(circle at bottom right, rgba(255,182,193,0.20), transparent 35%),
      linear-gradient(to bottom right, #fff8f7, #fffdfb, #ffeef3)
    `,
  }}
>

      <Navbar />

      {/* SAKURA */}
<div
className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1200')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>

      <section className="relative z-10 px-6 md:px-20 pt-36 pb-20">

  {/* TOP GLOW */}
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#f3d7cf] opacity-30 blur-3xl"></div>

  {/* BOTTOM GLOW */}
  <div className="absolute -bottom-40 -left-40 w-`112.5` h-`112.5` rounded-full bg-[#e7d9ca] opacity-30 blur-3xl"></div>

  {/* CENTER LIGHT */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white opacity-20 blur-3xl"></div>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative z-10">

            <img
              src={product.image}
              alt=""
              className="w-full h-[560px] object-cover rounded-[40px] shadow-[0_25px_60px_rgba(199,92,92,0.15)] border border-white"
            />

          </div>

          {/* CONTENT */}
         {/* CONTENT */}
<div className="relative z-10 bg-white/60 backdrop-blur-md p-10 rounded-[40px] border border-[#f4d9df] shadow-xl">

<p className="uppercase tracking-[10px] text-[#d86f8a] text-sm font-semibold">

      {product.category}

  </p>

 <h1 className="text-[65px] md:text-[85px] leading-[0.95] font-black text-[#2b2b2b] mt-6">

        {language === "en"
        ? product.name
        : product.japaneseName}

  </h1>

<div className="mt-8">

  <p className="text-6xl font-black text-[#d86f8a]">
    {formatPrice(product.price)}
  </p>

  {currency !== "JPY" && (
    <p className="mt-2 text-gray-500 text-lg">
      (~ ¥{product.price})
    </p>
  )}

</div>

  <p className="mt-8 text-lg leading-relaxed text-[#666] max-w-xl">
    {product.description}
  </p>

  {/* PRODUCT TAGS */}
<div className="flex gap-4 flex-wrap mt-10">

  {product.category === "Drink" && (
  <div className="bg-cyan-50 border border-cyan-200 px-5 py-3 rounded-full text-sm font-medium">
    🥤 Popular Drink
  </div>
)}

{product.category === "Dessert" && (
  <div className="bg-pink-50 border border-pink-200 px-5 py-3 rounded-full text-sm font-medium">
    🍰 Sweet Treat
  </div>
)}

{product.category === "Instant Meal" && (
  <div className="bg-orange-50 border border-orange-200 px-5 py-3 rounded-full text-sm font-medium">
    🍜 Quick Meal
  </div>
)}

  {product.mustTry && (
    <div className="bg-yellow-50 border border-yellow-200 px-5 py-3 rounded-full text-sm font-medium">
      ⭐ Must Try
    </div>
  )}

</div>

  {/* BUTTONS */}
  <div className="flex gap-5 mt-12 flex-wrap">

<button
  onClick={handleAddToCart}
  className="bg-[#111111] text-white px-10 py-5 rounded-full hover:scale-105 transition shadow-lg"
>
  {language === "en"
    ? "🛒 Add To Cart"
    : "カートに追加"}
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