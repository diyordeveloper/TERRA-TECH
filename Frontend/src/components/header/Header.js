import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_svg/logo.svg";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Aos from "aos";
import i18next from "i18next";
import cookie from "js-cookie";
import LanguageIcon from "@mui/icons-material/Language";
import "./header.scss";

const language = [
  {
    id: 1,
    code: "uz",
  },
  {
    id: 2,
    code: "ru",
  },
  {
    id: 3,
    code: "en",
  },
];
function Header() {
  const [navClick, setNavClick] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  });
  function onClickNav() {
    setNavClick(!navClick);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY < 20) {
        setNavClick(false);
      }
    });
  }, []);

  // ////////////////////////
  const currentLanguageCode = cookie.get("i18next") || "uz";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const [toggleLangMenu, setToggleLangMenu] = useState(false);
  const LangMenuToggle = () => {
    setToggleLangMenu(!toggleLangMenu);
  };
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <div className="container">
        <div className={"nav_"}>
          <ul className="ul_logo">
            <li>
              <Link to={"/"}>
                <img src={logo} className="logo" alt="Error" />
              </Link>
            </li>
          </ul>
          <ul className="ul_">
            <li>
              <a href="#about" className="link_">
                {t("navbar_links.1")}
              </a>
            </li>
            <li>
              <a href="#service" className="link_">
                {t("navbar_links.2")}
              </a>
            </li>
            <li>
              <a href="#special" className="link_">
                {t("navbar_links.3")}
              </a>
            </li>
            <div className="lang_  " onClick={LangMenuToggle}>
              <LanguageIcon className="lang_icon" />
              <div
                className={
                  toggleLangMenu ? "lang_menu_ show_lang_menu_ " : "lang_menu_"
                }
              >
                {language.map(({ id, code }) => (
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
                    {code}
                  </a>
                ))}
              </div>
            </div>
            <li>
              <a href="#contact" className="btn_bg_transparent">
                {t("investitsiya_btn")}
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_bar">
          <ul className="ul_logo">
            <li>
              <Link to={"/"}>
                <img src={logo} className="logo" alt="Error" />
              </Link>
            </li>
          </ul>
          <ul className="ul_">
            <div className="lang_  " onClick={LangMenuToggle}>
              <LanguageIcon className="lang_icon" />
              <div
                className={
                  toggleLangMenu ? "lang_menu_ show_lang_menu_ " : "lang_menu_"
                }
              >
                {language.map(({ id, code }) => (
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
                    {code}
                  </a>
                ))}
              </div>
            </div>
            <li>
              <IconButton onClick={onClickNav}>
                <MenuIcon className="icon_" />
              </IconButton>
            </li>
          </ul>
        </div>
        <div className={navClick ? "nav_menu active_" : "nav_menu"}>
          <IconButton className="iconbutton_" onClick={onClickNav}>
            <CloseIcon className="icon_" />
          </IconButton>
          <ul className="ul_logo">
            <li>
              <Link to={"/"}>
                <img
                  src={logo}
                  data-aos="zoom-in-up"
                  data-aos-duration="700"
                  className="logo"
                  alt="Error"
                />
              </Link>
            </li>
          </ul>
          <ul className="ul_">
            <li data-aos="zoom-in-up" data-aos-duration="700">
              <a href="#about" className="link_">
                {t("navbar_links.1")}
              </a>
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="750">
              <a href="#service" className="link_">
                {t("navbar_links.2")}
              </a>
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="800">
              <a href="#special" className="link_">
                {t("navbar_links.3")}
              </a>
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#contact" className="btn_bg_transparent">
                {t("investitsiya_btn")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
