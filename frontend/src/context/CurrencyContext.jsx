import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// CREATE CONTEXT
const CurrencyContext = createContext();

// PROVIDER
export const CurrencyProvider = ({ children }) => {

  // DEFAULT CURRENCY
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "JPY"
  );

  // EXCHANGE RATES
  const [rates, setRates] = useState({
    JPY: 1,
    INR: 0,
    USD: 0,
    KRW: 0,
    CNY: 0,
  });

  // FETCH EXCHANGE RATES
  useEffect(() => {

    const fetchRates = async () => {

      try {

        // BASE CURRENCY = JPY

        const response = await axios.get(

          "https://open.er-api.com/v6/latest/JPY"

        );

        setRates({

          JPY: 1,

          INR: response.data.rates.INR,

          USD: response.data.rates.USD,

          KRW: response.data.rates.KRW,

          CNY: response.data.rates.CNY,

        });

      } catch (error) {

        console.log(error);

      }

    };

    fetchRates();

  }, []);

  // SAVE SELECTED CURRENCY
  useEffect(() => {

    localStorage.setItem("currency", currency);

  }, [currency]);

// FORMAT PRICE
const formatPrice = (priceJPY) => {

  // JPY
  if (currency === "JPY") {

    return `¥${priceJPY}`;

  }

  // INR
  if (currency === "INR") {

    return `₹${(priceJPY * rates.INR).toFixed(2)}`;

  }

  // USD
  if (currency === "USD") {
    return `$${(priceJPY * rates.USD).toFixed(2)}`;
  }

  // KRW
  if (currency === "KRW") {
    return `₩${Math.round(priceJPY * rates.KRW)}`;
  }

  // CNY
  if (currency === "CNY") {
    return `¥${(priceJPY * rates.CNY).toFixed(2)}`;
  }

  return `¥${priceJPY}`;

};

  return (
    <CurrencyContext.Provider
      value={{ currency,setCurrency, formatPrice, }}>

      {children}

    </CurrencyContext.Provider>

  );

};

// CUSTOM HOOK
export const useCurrency = () => useContext(CurrencyContext);