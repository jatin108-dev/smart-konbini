import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Navbar = () => {

  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-20 py-6 flex justify-between items-center">

      {/* LOGO */}
      <Link
        to="/"
        className="text-2xl font-black text-[#111111]"
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
          to="/"
          className="hover:text-[#c75c5c] transition"
        >
          {t.stores}
        </Link>

        <Link
          to="/tourist-mode"
          className="hover:text-[#c75c5c] transition"
        >
          {t.touristMode}
        </Link>

      </div>

      {/* LANGUAGE BUTTON */}
      <button
        onClick={toggleLanguage}
        className="bg-[#111111] text-white px-6 py-3 rounded-full text-sm hover:scale-105 transition"
      >
        {language === "en"
          ? "日本語"
          : "English"}
      </button>

    </nav>
  );
};

export default Navbar;