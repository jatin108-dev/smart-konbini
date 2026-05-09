import { useEffect, useState } from "react";

const CurrencyConverter = () => {

  const [amount, setAmount] = useState(1000);

  const [currency, setCurrency] = useState("INR");

  const [converted, setConverted] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchRate = async () => {

      try {

        setLoading(true);

        const response = await fetch(
          `https://open.er-api.com/v6/latest/JPY`
        );

        const data = await response.json();

        const rate = data.rates[currency];

        const result = amount * rate;

        setConverted(result.toFixed(2));

      } catch (error) {

        console.log("API Error:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchRate();

  }, [currency, amount]);

  return (
    <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-xl border border-[#efe4d8] h-full flex flex-col justify-between">

      {/* TOP */}
      <div>

        <p className="uppercase tracking-[6px] text-[#c75c5c] text-xs">
          Currency Converter
        </p>

        <h2 className="text-[55px] font-black text-[#2b2b2b] mt-6">
          ¥{amount}
        </h2>

      </div>

      {/* INPUT AREA */}
      <div className="mt-8 space-y-5">

        {/* INPUT */}
        <div>

          <p className="text-sm text-[#666] mb-3">
            Amount in Yen (JPY)
          </p>

          <div className="bg-[#f6f1eb] rounded-[22px] px-5 py-4 flex items-center">

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent outline-none text-2xl w-full text-[#2b2b2b]"
            />

            <span className="text-xl font-semibold text-[#555]">
              ¥
            </span>

          </div>

        </div>

        {/* SELECT */}
        <div>

          <p className="text-sm text-[#666] mb-3">
            Convert to
          </p>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full bg-[#f6f1eb] rounded-[22px] px-5 py-4 outline-none text-lg text-[#2b2b2b]"
          >

            <option value="INR">
              🇮🇳 INR - Indian Rupee
            </option>

            <option value="USD">
              🇺🇸 USD - US Dollar
            </option>

            <option value="KRW">
              🇰🇷 KRW - Korean Won
            </option>

            <option value="CNY">
              🇨🇳 CNY - Chinese Yuan
            </option>

          </select>

        </div>

      </div>

      {/* RESULT */}
      <div className="mt-8 bg-[#111111] rounded-[30px] p-6 text-white relative overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-[#c75c5c] opacity-20 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <p className="text-sm text-gray-400">
            Real-Time Converted Amount
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3 break-words">

            {loading
              ? "Loading..."
              : `${converted} ${currency}`}

          </h2>

          <div className="flex justify-between items-center mt-8">

            <p className="text-gray-400 text-sm">
              Live Exchange Rate
            </p>

            <button className="w-14 h-14 rounded-2xl border border-[#2d2d2d] flex items-center justify-center hover:bg-[#1b1b1b] transition">

              <span className="text-2xl text-[#c75c5c]">
                ⇄
              </span>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CurrencyConverter;