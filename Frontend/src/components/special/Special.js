import React, { useEffect } from "react";
import "./special.scss";
import AOS from "aos";
import { useTranslation } from "react-i18next";
function Special() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="special_container height_" id="special">
      <div className="container">
        <div className="content_ page_padding">
          <span className="name_" data-aos="zoom-in-up" data-aos-duration="700">
            {t("special_page.link")}
          </span>
          <span
            className="title_"
            data-aos="zoom-in-up"
            data-aos-duration="900"
          >
            {t("special_page.title")}
          </span>
          <div className="contain_">
            <div className="block_ text_blok">
              <p
                className="titl"
                data-aos="zoom-in-left"
                data-aos-duration="900"
              >
                {" "}
                {t("special_page.body")}
              </p>
              <div className="list_">
                <div
                  className="box_"
                  data-aos="zoom-in-left"
                  data-aos-duration="900"
                >
                  <span className="names">
                    <span className="color_">
                      {t("special_page.special.1.time")}
                    </span>
                    {t("special_page.special.1.title")}
                  </span>
                  <span className="bady_">
                    {t("special_page.special.1.body")}
                  </span>
                </div>
                <div
                  className="box_"
                  data-aos="zoom-in-left"
                  data-aos-duration="900"
                >
                  <span className="names">
                    <span className="color_">
                      {t("special_page.special.2.time")}
                    </span>
                    {t("special_page.special.2.title")}
                  </span>
                  <span className="bady_">
                    {t("special_page.special.2.body")}
                  </span>
                </div>
                <div
                  className="box_"
                  data-aos="zoom-in-left"
                  data-aos-duration="900"
                >
                  <span className="names">
                    <span className="color_">
                      {t("special_page.special.3.time")}{" "}
                    </span>
                    {t("special_page.special.3.title")}
                  </span>
                  <span className="bady_">
                    {t("special_page.special.3.body")}
                  </span>
                </div>
                <div
                  className="box_"
                  data-aos="zoom-in-left"
                  data-aos-duration="900"
                >
                  <span className="names">
                    <span className="color_">
                      {t("special_page.special.4.time")}
                    </span>
                    {t("special_page.special.4.title")}
                  </span>
                  <span className="bady_">
                    {t("special_page.special.4.body")}
                  </span>
                </div>
              </div>
              <a href="#">
              <button
                className="btn_bg_"
                data-aos="zoom-in-left"
                data-aos-duration="900"
              >
                {t("learn_more_btn")}
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
