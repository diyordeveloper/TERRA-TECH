import React, { useEffect } from "react"; 
import "./strategiya.scss";
import { useTranslation } from "react-i18next";
import Aos from "aos";
function Strategiya() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="dolorem_container  " id="strategiya">
      <div className="container">
        <div className="content_ page_padding">
          <div className="block_ b_card">
            <div
              className="card_"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <span className="number_">START </span>
              <span className="body_">
                {t("strategiya_page.strategiya_card.1")}
              </span>
            </div>
            <div
              className="card_"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <span className="number_">MIDDLE </span>
              <span className="body_">
                {t("strategiya_page.strategiya_card.2")}
              </span>
            </div>
            <div
              className="card_"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <span className="number_">PREMIUM </span>
              <span className="body_">
                {t("strategiya_page.strategiya_card.3")}
              </span>
            </div>
            <div
              className="card_"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <span className="number_">PLATINUM </span>
              <span className="body_">
                {t("strategiya_page.strategiya_card.4")}
              </span>
            </div>
            <div
              className="btn_gr "
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <button className="btn_bg_  dn_btn">{t("learn_more_btn")}</button>
            </div>
          </div>
          <div className="block_ b_text">
            <span
              className="name_"
              data-aos="zoom-in-left"
              data-aos-duration="700"
            >
              {t("strategiya_page.link")}
            </span>
            <span
              className="title_"
              data-aos="zoom-in-left"
              data-aos-duration="800"
            >
              {t("strategiya_page.title")}
            </span>
            <div
              className="body_"
              data-aos="zoom-in-left"
              data-aos-duration="900"
            >
              {t("strategiya_page.body")}
            </div>
            <ul className="ul_">
              <li data-aos="zoom-in-left" data-aos-duration="900">
                <span className="span">
                  {t("strategiya_page.strategiya_ul_list.1")}
                </span>
              </li>
              <li data-aos="zoom-in-left" data-aos-duration="900">
                <span className="span">
                  {t("strategiya_page.strategiya_ul_list.2")}
                </span>
              </li>
              <li data-aos="zoom-in-left" data-aos-duration="900">
                <span className="span">
                  {t("strategiya_page.strategiya_ul_list.3")}
                </span>
              </li>
              <li data-aos="zoom-in-left" data-aos-duration="900">
                <span className="span">
                  {t("strategiya_page.strategiya_ul_list.4")}
                </span>
              </li>
            </ul>
            <button
              className="btn_bg_  db_btn"
              data-aos="zoom-in-left"
              data-aos-duration="900"
            >
              {t("learn_more_btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strategiya;
