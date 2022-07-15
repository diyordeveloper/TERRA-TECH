import React, { useEffect } from "react";
import moon_ from "../../assets/background/moon_1.png";
import bitcoin_1 from "../../assets/logo_svg/bitcoin_1.png";
import bitcoin_2 from "../../assets/logo_svg/bitcoin_2.png";
import bitcoin_3 from "../../assets/logo_svg/bitcoin_3.png"; 
import AOS from "aos";
import "./service.scss";

import { useTranslation } from "react-i18next";
function Service() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="service_container height_" id="service">
      <div className="container">
        <div className="content_ page_padding">
          <span className="name_" data-aos="zoom-in-up" data-aos-duration="900">{t("service_page.link")}</span>
          <span className="title_"  data-aos="zoom-in-up" data-aos-duration="900">
          {t("service_page.title")}
          </span>
          <div className="moon">
            <div className="moon_kub k_right">
              <img src={moon_} className={"moon_img"} alt="Error" />
              <div className="box box_1"  data-aos="zoom-in-right" data-aos-duration="900">
                <div className="text_ end_">
                  <span className="titl">
                    {t("service_page.services.1.title")}
                  </span>
                  <span className="bady">
                    {t("service_page.services.1.body")}
                  </span>
                </div>
                <div className="kub k_left">
                  <img src={bitcoin_1} className={"bitcoin"} alt="Error!!!" />
                </div>
              </div>
              <div className="box box_2" data-aos="zoom-in-right" data-aos-duration="900">
                <div className="text_ end_">
                  <span className="titl">{t("service_page.services.2.title")}</span>
                  <span className="bady">
                    {t("service_page.services.2.body")}
                  </span>
                </div>
                <div className="kub k_left">
                  <img src={bitcoin_2} className={"bitcoin"} alt="Error!!!" />
                </div>
              </div>
              <div className="box box_3" data-aos="zoom-in-right" data-aos-duration="900"> 
                <div className="text_ end_">
                  <span className="titl">{t("service_page.services.3.title")}</span>
                  <span className="bady">
                    {t("service_page.services.3.body")}
                  </span>
                </div>
                <div className="kub k_left">
                  <img src={bitcoin_3} className={"bitcoin"} alt="Error!!!" />
                </div>
              </div>
              <div className="box box_11" data-aos="zoom-in-left" data-aos-duration="900">
                <div className="kub k_right">
                  <img src={bitcoin_1} className={"bitcoin"} alt="Error!!!" />
                </div>
                <div className="text_ start_  ">
                  <span className="titl">
                    {t("service_page.services.4.title")}
                  </span>
                  <span className="bady">
                    {t("service_page.services.4.body")}
                  </span>
                </div>
              </div>
              <div className="box box_22"data-aos="zoom-in-left" data-aos-duration="900">
                <div className="kub k_right">
                  <img src={bitcoin_2} className={"bitcoin"} alt="Error!!!" />
                </div>
                <div className="text_ start_  ">
                  <span className="titl">{t("service_page.services.5.title")}</span>
                  <span className="bady">
                    {t("service_page.services.5.body")}
                  </span>
                </div>
              </div>
              <div className="box box_33"data-aos="zoom-in-left" data-aos-duration="900">
                <div className="kub k_right">
                  <img src={bitcoin_3} className={"bitcoin"} alt="Error!!!" />
                </div>
                <div className="text_ start_  ">
                  <span className="titl">{t("service_page.services.6.title")}</span>
                  <span className="bady">
                    {t("service_page.services.6.body")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        <a href='#' className="btn_bg_" data-aos="zoom-in-up" data-aos-duration="900">{t("learn_more_btn")}</a> 
        </div>
      </div>
    </div>
  );
}

export default Service;
