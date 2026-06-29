import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
// import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  // CART COUNT
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // CURRENCY
  const { currency, setCurrency } = useCurrency();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleBack = () => navigate(-1);

// FETCH CART COUNT 
 const fetchCartCount = async () => {

  if (!user) {

    setCartCount(0);

    return;

  }

  try {

    const response = await axios.get(

      "http://localhost:5000/api/cart",

      {

        withCredentials: true,

      }

    );

    const totalItems = response.data.cart.items.reduce(

      (sum, item) => sum + item.quantity,

      0

    );

    setCartCount(totalItems);

  } catch (error) {

    console.log(error);

  }

};

useEffect(() => {

  fetchCartCount();

}, [user, location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-5 md:px-20 py-4 md:py-6 flex justify-between items-center">

      {/* LEFT: Back + Logo */}
      <div className="flex items-center gap-3">

        {/* BACK BUTTON — hide on home */}
        {!isHome && (
          <button
            onClick={handleBack}
            className="bg-white border border-[#e8ddd2] text-[#111] px-3 py-2 rounded-full text-xs font-medium shadow-sm hover:scale-105 transition flex items-center gap-1"
          >
            ← Back
          </button>
        )}

        {/* LOGO */}
        <Link to="/" className="text-xl md:text-3xl font-black text-[#111111]">
          Smart<span className="text-[#c75c5c]">Konbini</span>
        </Link>

      </div>

      {/* CENTER NAV LINKS — desktop only */}
      <div className="hidden md:flex gap-10 text-sm font-medium text-[#111111]">
        <Link to="/" className="hover:text-[#c75c5c] transition">{t.home}</Link>
        <Link to="/products" className="hover:text-[#c75c5c] transition">{t.products}</Link>
        <Link to="/tourist-mode" className="hover:text-[#c75c5c] transition">{t.touristMode}</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 md:gap-4">

        {/* LANGUAGE — desktop only */}
        <button
          onClick={toggleLanguage}
          className="hidden md:block bg-white border border-[#e8ddd2] text-[#111111] px-4 py-3 rounded-full text-sm hover:scale-105 transition shadow-sm"
        >
          {language === "en" ? "日本語" : "EN"}
        </button>

        {/* CURRENCY - DESKTOP */}
<div className="hidden lg:block">

  <select
    value={currency}
    onChange={(e) => setCurrency(e.target.value)}
    className="bg-white border border-[#e8ddd2] rounded-full px-4 py-3 text-sm shadow-sm hover:shadow-md transition outline-none cursor-pointer"
  >
    <option value="JPY">🇯🇵 JPY</option>
    <option value="INR">🇮🇳 INR</option>
    <option value="USD">🇺🇸 USD</option>
    <option value="KRW">🇰🇷 KRW</option>
    <option value="CNY">🇨🇳 CNY</option>
  </select>

</div>

        {/* CART */}
<Link to="/cart">
  <button className="relative bg-white border border-[#e8ddd2] px-4 py-3 rounded-full shadow-sm hover:scale-105 transition">
    🛒

    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-[#c75c5c] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {cartCount}
      </span>
    )}

  </button>
</Link>

        {/* USER — desktop only */}
        {user ? (
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-white border border-[#e8ddd2] px-4 py-3 rounded-full text-sm font-medium shadow-sm">
              {user.name}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-3 rounded-full text-sm hover:bg-red-600 transition shadow-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="hidden md:block">
            <button className="bg-[#111111] text-white px-5 py-3 rounded-full text-sm hover:scale-105 transition shadow-lg">
              {language === "en" ? "Sign In" : "ログイン"}
            </button>
          </Link>
        )}

        {/* HAMBURGER — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-white border border-[#e8ddd2] rounded-full shadow-sm gap-1"
        >
          <span className={`block w-4 h-0.5 bg-[#111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-4 h-0.5 bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-0.5 bg-[#111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[#efe4d8] shadow-xl px-6 py-6 flex flex-col gap-4 z-50">

          {/* NAV LINKS */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-[#111] font-medium hover:text-[#c75c5c] transition">
            {t.home}
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="text-[#111] font-medium hover:text-[#c75c5c] transition">
            {t.products}
          </Link>
          <Link to="/tourist-mode" onClick={() => setMenuOpen(false)} className="text-[#111] font-medium hover:text-[#c75c5c] transition">
            {t.touristMode}
          </Link>

          <hr className="border-[#efe4d8]" />
          {/* MOBILE CURRENCY */}

<div className="flex flex-col gap-2">

  <p className="text-sm font-medium text-[#666]">

    🌍 Currency

  </p>

  <select
    value={currency}
    onChange={(e) => setCurrency(e.target.value)}
    className="border border-[#e8ddd2] rounded-xl px-4 py-3 bg-white"
  >
    <option value="JPY">🇯🇵 JPY</option>
    <option value="INR">🇮🇳 INR</option>
    <option value="USD">🇺🇸 USD</option>
    <option value="KRW">🇰🇷 KRW</option>
    <option value="CNY">🇨🇳 CNY</option>
  </select>

</div>

<hr className="border-[#efe4d8]" />

          {/* LANGUAGE TOGGLE */}
          <button
            onClick={() => { toggleLanguage(); setMenuOpen(false); }}
            className="text-left text-sm text-[#666] hover:text-[#c75c5c] transition"
          >
            {language === "en" ? "🌐 日本語に切り替え" : "🌐 Switch to English"}
          </button>

          {/* USER SECTION */}
          {user ? (
            <div className="flex flex-col gap-3">
              <div className="text-sm font-medium text-[#111]">👤 {user.name}</div>
              <button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                className="bg-red-500 text-white px-5 py-3 rounded-full text-sm hover:bg-red-600 transition text-center"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#111] text-white px-5 py-3 rounded-full text-sm hover:scale-105 transition">
                {language === "en" ? "Sign In" : "ログイン"}
              </button>
            </Link>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;