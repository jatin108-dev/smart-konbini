import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
// import { products } from "../data/products"; => Kyuki ab DB use karenge.
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {

  const { language } = useLanguage();
  // PRODUCTS STATE
const [products, setProducts] = useState([]);

// LOADING STATE
const [loading, setLoading] = useState(true);

// FETCH PRODUCTS FROM BACKEND
useEffect(() => {

  const fetchProducts = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(response.data.products);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  fetchProducts();

}, []);

  return (
    <main className="min-h-screen bg-[#f6f1eb] overflow-x-hidden font-['Outfit']">

      <Navbar />

      {/* HERO */}
      <section className="relative px-6 md:px-20 pt-36 pb-20 overflow-hidden">

        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#c75c5c] opacity-20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >

          <p className="uppercase tracking-[7px] text-[#c75c5c] text-xs mb-6">

            {language === "en"
              ? "Konbini Collection"
              : "コンビニコレクション"}

          </p>

          <h1 className="text-[55px] md:text-[95px] leading-[0.95] font-black text-[#2b2b2b]">

            {language === "en"
              ? "Explore Japanese Foods"
              : "日本のフードを探索"}

          </h1>

        </motion.div>

      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-20 pb-28">
        {loading && (
  <h2 className="text-center text-2xl font-bold">
    Loading Products...
  </h2>
)}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >

              <div className="bg-[#fffaf5] rounded-[35px] overflow-hidden shadow-xl border border-[#efe4d8]">

                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt=""
                    className="h-[350px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  <p className="uppercase tracking-[4px] text-[#c75c5c] text-xs">

                    {product.category}

                  </p>

                  <div className="flex justify-between items-center mt-4">

                    <h2 className="text-2xl font-bold text-[#2b2b2b]">

                      {language === "en"
                        ? product.name
                        : product.japaneseName}

                    </h2>

                    <div className="bg-[#f6f1eb] px-4 py-2 rounded-full text-sm">
                      ¥{product.price}
                    </div>

                  </div>

                  <Link to={`/products/${product._id}`}>

                    <button className="mt-7 w-full bg-[#2b2b2b] text-white py-4 rounded-full hover:scale-[1.02] transition duration-300">

                      {language === "en"
                        ? "View Product"
                        : "商品を見る"}

                    </button>

                  </Link>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
};

export default Products;