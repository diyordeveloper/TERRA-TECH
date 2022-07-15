import React, { useEffect } from "react"; 
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "./about.scss";

function About() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="about_container height_" id="about">
      <div className="container">
        <div className="content_ page_padding">
          <div className="block_">
            <span className="name_" data-aos="zoom-in-left"     data-aos-duration="500"> {t("about_page.link")}</span>
            <span className="title_" data-aos="zoom-in-left"    data-aos-duration="700" >
            {t("about_page.title")}
            </span>
            <span className="body_" data-aos="zoom-in-left"    data-aos-duration="900">
            {t("about_page.body")}
            </span>  
            <a href='#' className="btn_bg_" data-aos="zoom-in-left"    data-aos-duration="900">{t("learn_more_btn")}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
