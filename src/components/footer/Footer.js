import React, { useEffect } from "react";
import logo from "../../assets/logo_svg/logo.svg";
import { useTranslation } from "react-i18next";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

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
          <img src={logo} data-aos="zoom-in-up"
              data-aos-duration="700" className={"logo_"} alt="Error!!!!" />
          <ul className="ul_">
            <li data-aos="zoom-in-up"
              data-aos-duration="900">
              <a href="#home" className="link_">
                {t("footer_page.footer_links.1")}
              </a>
            </li>
            <li data-aos="zoom-in-up"
              data-aos-duration="900">
              <a href="#about" className="link_">
                {t("footer_page.footer_links.2")}
              </a>
            </li>
            <li data-aos="zoom-in-up"
              data-aos-duration="900">
              <a href="#service" className="link_">
                {t("footer_page.footer_links.3")}
              </a>
            </li>
            <li data-aos="zoom-in-up"
              data-aos-duration="900">
              <a href="#special" className="link_">
                {t("footer_page.footer_links.4")}
              </a>
            </li>

            <li data-aos="zoom-in-up"
              data-aos-duration="900">
              <a href="#strategiya" className="link_">
                {t("footer_page.footer_links.5")}
              </a>
            </li>

            <li data-aos="zoom-in-up"
              data-aos-duration="900">
              <a href="#partners" className="link_">
                {t("footer_page.footer_links.6")}
              </a>
            </li>

            <li data-aos="zoom-in-up"
              data-aos-duration="900">
              <a href="#contact" className="link_">
                {t("footer_page.footer_links.7")}
              </a>
            </li>
          </ul>
          <p className="body_"data-aos="zoom-in-up"
              data-aos-duration="900">{t("footer_page.body")}</p>
          <div className="messenger_">
            <div className="border_" data-aos="zoom-in-up"
              data-aos-duration="700">
              <FacebookIcon className="icon_" />
            </div>
            <div className="border_" data-aos="zoom-in-up"
              data-aos-duration="800">
              <TwitterIcon className="icon_" />
            </div>
            <div className="border_" data-aos="zoom-in-up"
              data-aos-duration="850">
              <InstagramIcon className="icon_" />
            </div>
            <div className="border_" data-aos="zoom-in-up"
              data-aos-duration="900">
              <LinkedInIcon className="icon_" />
            </div>
            <div className="border_" data-aos="zoom-in-up"
              data-aos-duration="1000">
              <TelegramIcon className="icon_" />
            </div>
          </div>
        </div>
      </div>
      <hr className="hr_" />
      <div className="div_link">
        <a href="#" className="footer_link">
          Copyright 2022 Terra Tech . All rights reserved.
        </a>
      </div>
    </div>
  );
}

export default Footer;
