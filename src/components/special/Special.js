import React from "react";
import BtnBg from "../btn/BtnBg";
import "./special.scss";
import { useTranslation } from "react-i18next";
function Special() {
  const { t } = useTranslation();
  return (
    <div className="special_container height_" id="special">
      <div className="container">
        <div className="content_ page_padding">
          <span className="name_">{t("special_page.link")}</span>
          <span className="title_">{t("special_page.title")}</span>
          <div className="contain_">
            <div className="block_ text_blok">
              <span className="titl">{t("special_page.body")}</span>
              <div className="list_">
                <div className="box_">
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
                <div className="box_">
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
                <div className="box_">
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
                <div className="box_">
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
              <BtnBg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
