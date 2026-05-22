import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Navbar = () => {

  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-5 md:px-20 py-6 flex justify-between items-center">

      {/* LOGO */}
      <Link
        to="/"
        className="text-2xl md:text-3xl font-black text-[#111111]"
      >

        Smart<span className="text-[#c75c5c]">Konbini</span>

      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-10 text-sm font-medium text-[#111111]">

        <Link
          to="/"
          className="hover:text-[#c75c5c] transition"
        >
          {t.home}
        </Link>

        <Link
          to="/products"
          className="hover:text-[#c75c5c] transition"
        >
          {t.products}
        </Link>

        <Link
          to="/tourist-mode"
          className="hover:text-[#c75c5c] transition"
        >
          {t.touristMode}
        </Link>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-4">

        {/* LANGUAGE BUTTON */}
        <button
          onClick={toggleLanguage}
          className="bg-white border border-[#e8ddd2] text-[#111111] px-4 md:px-5 py-3 rounded-full text-sm hover:scale-105 transition shadow-sm"
        >

          {language === "en"
            ? "日本語"
            : "EN"}

        </button>

        {/* LOGIN */}
        <Link to="/login">

          <button className="bg-[#111111] text-white px-5 md:px-6 py-3 rounded-full text-sm hover:scale-105 transition shadow-lg">

            {language === "en"
              ? "Sign In"
              : "ログイン"}

          </button>

        </Link>

      </div>

    </nav>
  );
};

export default Navbar;