import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Login = () => {

  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    setLoading(true);
    setError("");

    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );

    if (response.data.success) {
      navigate("/");
    }

  } catch (error) {

    setError(
      error.response?.data?.message ||
      "Login failed"
    );

  } finally {

    setLoading(false);

  }
};

  return (
    <main className="min-h-screen bg-[#f6f1eb] flex items-center justify-center px-5 py-10 font-['Outfit'] overflow-hidden relative">

      {/* TOP GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#c75c5c] opacity-20 blur-3xl rounded-full"></div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#111111] opacity-10 blur-3xl rounded-full"></div>

      {/* TOP BAR */}
      <div className="absolute top-6 left-5 right-5 md:left-10 md:right-10 z-20 flex justify-between items-center">

        {/* BACK */}
        <Link to="/">

          <button className="bg-white border border-[#e9ddd2] px-5 py-3 rounded-full shadow-md hover:scale-105 transition text-[#2b2b2b] font-medium">

            {language === "en"
              ? "← Back"
              : "← 戻る"}

          </button>

        </Link>

        {/* LANGUAGE */}
        <button
          onClick={toggleLanguage}
          className="bg-[#111111] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >

          {language === "en"
            ? "日本語"
            : "EN"}

        </button>

      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl bg-white rounded-[45px] overflow-hidden shadow-2xl border border-[#efe4d8] grid md:grid-cols-2"
      >

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block min-h-[700px]">

          <img
            src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">

            <p className="uppercase tracking-[6px] text-[#ffb4b4] text-xs">

              Smart Konbini

            </p>

            <h2 className="text-5xl font-black mt-6 leading-[1]">

              {language === "en"
                ? "Explore Japan Like Never Before"
                : "これまでにない日本体験"}

            </h2>

            <p className="mt-6 text-gray-200 leading-relaxed max-w-md">

              {language === "en"
                ? "Discover modern Japanese convenience culture with tourist-friendly experiences and smart digital services."
                : "観光客向けのスマートサービスで日本の最新コンビニ文化を体験。"}

            </p>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          <p className="uppercase tracking-[6px] text-[#c75c5c] text-xs">

            {language === "en"
              ? "Welcome Back"
              : "おかえりなさい"}

          </p>

          <h1 className="text-5xl font-black text-[#2b2b2b] mt-6">

            {language === "en"
              ? "Sign In"
              : "ログイン"}

          </h1>

          <p className="mt-4 text-[#666] leading-relaxed">

            {language === "en"
              ? "Continue your Smart Konbini journey."
              : "Smart Konbini を続けましょう。"}

          </p>

          {/* FORM */}
          <form
  onSubmit={handleSubmit}
  className="mt-10 space-y-5"
>

            {/* EMAIL */}
            <div>

              <p className="text-sm text-[#666] mb-3">

                {language === "en"
                  ? "Email Address"
                  : "メールアドレス"}

              </p>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={
                  language === "en"
                    ? "you@example.com"
                    : "メールを入力"
                }
                className="w-full bg-[#f6f1eb] rounded-[20px] px-5 py-4 outline-none text-[#2b2b2b]"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <p className="text-sm text-[#666] mb-3">

                {language === "en"
                  ? "Password"
                  : "パスワード"}

              </p>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={
                  language === "en"
                    ? "Enter your password"
                    : "パスワードを入力"
                }
                className="w-full bg-[#f6f1eb] rounded-[20px] px-5 py-4 outline-none text-[#2b2b2b]"
              />

            </div>

            {/* FORGOT */}
            <div className="flex justify-end">

              <button className="text-[#c75c5c] text-sm font-medium hover:underline">

                {language === "en"
                  ? "Forgot Password?"
                  : "パスワードを忘れましたか？"}

              </button>

            </div>

            {error && (
               <p className="text-red-500 text-sm">
               {error}
               </p>
             )}

            {/* BUTTON */}
      <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111111] text-white py-4 rounded-[20px] hover:scale-[1.02] transition shadow-lg text-lg font-medium"
>
            {loading
             ? "Signing In..."
             : language === "en"
             ? "Sign In"
             : "ログイン"}
      </button>

          </form>

          {/* FOOTER */}
          <p className="mt-8 text-center text-[#666]">

            {language === "en"
              ? "Don’t have an account?"
              : "アカウントをお持ちではありませんか？"}

            {" "}

            <Link
              to="/signup"
              className="text-[#c75c5c] font-semibold"
            >

              {language === "en"
                ? "Create One"
                : "新規登録"}

            </Link>

          </p>

        </div>

      </motion.div>

    </main>
  );
};

export default Login;