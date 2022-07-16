import React, { useEffect } from "react";
import logo from "../../assets/logo_svg/logo.svg";
import { useTranslation } from "react-i18next";

// Icons
import { FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";
import "./footer.scss";
import Aos from "aos";
function Footer() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="footer_container ">
      <div className="container">
        <div className="content_ footer_padding">
          <a href="#">
            <img
              src={logo}
              data-aos="zoom-in-up"
              data-aos-duration="700"
              className={"logo_"}
              alt="Error!!!!"
            />
          </a>
          <ul className="ul_">
            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#home" className="link_">
                {t("footer_page.footer_links.1")}
              </a>
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#about" className="link_">
                {t("footer_page.footer_links.2")}
              </a>
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#service" className="link_">
                {t("footer_page.footer_links.3")}
              </a>
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#special" className="link_">
                {t("footer_page.footer_links.4")}
              </a>
            </li>

            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#strategiya" className="link_">
                {t("footer_page.footer_links.5")}
              </a>
            </li>

            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#partners" className="link_">
                {t("footer_page.footer_links.6")}
              </a>
            </li>

            <li data-aos="zoom-in-up" data-aos-duration="900">
              <a href="#contact" className="link_">
                {t("footer_page.footer_links.7")}
              </a>
            </li>
          </ul>
          <div className="messenger_">
            <a
              href="https://www.instagram.com/terra_techcomp"
              className="border_"
            >
              <FaInstagram className="icon_" />
            </a>
            <a href="https://tiktok.com" className="border_">
              <FaTiktok className="icon_" />
            </a>
            <a href="https://t.me/terra_tech_comp" className="border_">
              <FaTelegram className="icon_" />
            </a>
          </div>
        </div>
      </div>
      <hr className="hr_" />
      <div className="div_link">
        <p className="footer_link">
          Copyright 2022 Terra Tech . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
