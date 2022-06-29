import React from "react";
import BtnBg from "../btn/BtnBg";
import "./dolorem.scss";
import { useTranslation } from "react-i18next";
function Dolorem() {
  const { t } = useTranslation();
  return (
    <div className="dolorem_container height_md">
      <div className="container">
        <div className="content_">
          <div className="block_ b_card">
            <div className="card_">
              <span className="number_">3,271.62</span>
              <span className="body_">{t("dolorem_page.dolorem_card.1")}</span>
            </div>
            <div className="card_">
              <span className="number_">2M+</span>
              <span className="body_">{t("dolorem_page.dolorem_card.2")}</span>
            </div>
            <div className="card_">
              <span className="number_">1344</span>
              <span className="body_">{t("dolorem_page.dolorem_card.3")}</span>
            </div>
            <div className="card_">
              <span className="number_">2K+</span>
              <span className="body_">{t("dolorem_page.dolorem_card.4")}</span>
            </div>
            <div className="btn_gr">
              <button className="btn_bg_ d-none dn_btn">Learn More</button>
            </div>
          </div>
          <div className="block_ b_text">
            <span className="name_">{t("dolorem_page.link")}</span>
            <span className="title_">{t("dolorem_page.title")}</span>
            <div className="body_">{t("dolorem_page.body")}</div>
            <ul className="ul_">
              <li>
                <span className="span">{t("dolorem_page.dolorem_ul_list.1")}</span>
              </li>
              <li>
                <span className="span">{t("dolorem_page.dolorem_ul_list.2")}</span>
              </li>
              <li>
                <span className="span">{t("dolorem_page.dolorem_ul_list.3")}</span>
              </li>
              <li>
                <span className="span">{t("dolorem_page.dolorem_ul_list.4")}</span>
              </li>
            </ul>
            <BtnBg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dolorem;
