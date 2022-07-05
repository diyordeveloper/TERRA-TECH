import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_svg/logo.svg";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import "./header.scss";
function Header() {
  const [navClick, setNavClick] = useState(false);
  const { t } = useTranslation();
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
  return (
    <>
      <div className="container">
        <div className={"nav_"}>
          <ul className="ul_logo">
            <li>
              <a href="#">
                <img src={logo} className="logo" alt="Error" />
              </a>
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
              <a href="#contact" className="link_">
                {t("navbar_links.3")}
              </a>
            </li>
            <li>
              <a href="#" className="btn_bg_">
                {t("investitsiya_btn")}
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_bar">
          <ul className="ul_logo">
            <li>
              <a href="#">
                <img src={logo} className="logo" alt="Error" />
              </a>
            </li>
          </ul>
          <ul className="ul_">
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
              <a href="#">
                <img src={logo} className="logo" alt="Error" />
              </a>
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
              <a href="#contact" className="link_">
                {t("navbar_links.3")}
              </a>
            </li>
            <li>
              <a href="#" className="btn_bg_">
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
