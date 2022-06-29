import React from "react";
import BtnBg from "../btn/BtnBg";
import "./about.scss";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <div className="about_container height_">
      <div className="container">
        <div className="content_">
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
