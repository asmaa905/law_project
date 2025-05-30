"use client";
import { useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";

export default function I18nProvider({ children }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    i18n
      .use(initReactI18next)
      .use(LanguageDetector)
      .use(HttpApi)
      .init({
        supportedLngs: ["en", "ar"],
        fallbackLng: "en",
        detection: {
          order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
          caches: ["cookie"],
        },
        backend: {
          loadPath: "/locale/{{lng}}/translation.json",
        },
        interpolation: {
          escapeValue: false,
        },
      })
      .then(() => {
        // Set initial direction immediately after initialization
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
        setInitialized(true);
      });

    const handleLanguageChanged = (lng) => {
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  if (!initialized) {
    return null; // or a loading spinner
  }

  return children;
}
