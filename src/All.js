import React, { useEffect, useState, createContext } from "react";
import Home_1 from "./components/home_1/Home_1";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Special from "./components/special/Special";
import SpaceX from "./components/spacex/SpaceX";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";
import cookie from "js-cookie";
import { useTranslation } from "react-i18next";

import Uzbekistan from "./assets/logo_svg/uzbekistan.png";
import Russia from "./assets/logo_svg/russia.png";
import Contact from "./components/contact/Contact";
import Strategiya from "./components/strategiya/Strategiya";
const language = [
  {
    id: 1,
    code: "uz",
    name: "Uzb",
    images: Uzbekistan,
  },
  {
    id: 2,
    code: "ru",
    name: "Rus",
    images: Russia,
  },
];
function All() {
  const { t } = useTranslation();
  const currentLanguageCode = cookie.get("i18next") || "ru";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const [toggleLangMenu, setToggleLangMenu] = useState(false);
  const LangMenuToggle = () => {
    setToggleLangMenu(!toggleLangMenu);
  };

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  function Toggle() {
    setToggleLangMenu(false);
  }

  return (
    <>
      <div className="language_" onClick={LangMenuToggle}>
        <LanguageIcon className="icon_" />
      </div>
      <div
        className={toggleLangMenu ? "lang_menu show_lang_menu " : "lang_menu"}
      >
        {language.map(({ id, code, name, images }) => (
          <a
            key={id}
            href="#"
            onClick={() => i18next.changeLanguage(code)}
            className={
              code === currentLanguageCode
                ? "lang_btn active_lang"
                : "lang_btn "
            }
          >
            <img src={images}   alt={code} />
            {name}
          </a>
        ))}
      </div>
      <div className="wrapper" onClick={Toggle}>
        <Home_1 />
        <About />
        <Service />
        <Special />
        <SpaceX />
        <Strategiya />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default All;
