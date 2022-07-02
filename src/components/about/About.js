import React from "react";
import BtnBg from "../btn/BtnBg";
import { useTranslation } from "react-i18next";
import "./about.scss";
function About() {
  const { t } = useTranslation();
  return (
    <div className="about_container height_" id="about">
      <div className="container">
        <div className="content_ page_padding">
          <div className="block_">
            <span className="name_"> {t("about_page.link")}</span>
            <span className="title_">
            {t("about_page.title")}
            </span>
            <span className="body_">
            {t("about_page.body")}
            </span>
            <span className="body_">
            {t("about_page.body")}
            </span> 
            <BtnBg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
