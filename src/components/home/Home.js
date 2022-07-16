import React, { useEffect } from "react";
import AOS from "aos"; 
import Header from "../header/Header";
import "./home.scss";

import { useTranslation } from "react-i18next";
function Home_1() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="home_container height_  one_list_height" id="home">
      <Header />
      <div className="container ">
        <div className="content_">
          <span className="title_"  data-aos="zoom-in-up" data-aos-duration="700">{t("home_page.title")}</span>

          <span className="body_" data-aos="zoom-in-up" data-aos-duration="1000">{t("home_page.body")}</span>
        <a href='#' className="btn_bg_" data-aos="zoom-in-up" data-aos-duration="1100">{t("learn_more_btn")}</a>
        </div>
      </div>
    </div>
  );
}

export default Home_1;
