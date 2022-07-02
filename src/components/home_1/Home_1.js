import React from "react";
import BtnBgNone from "../btn/BtnBgNone";
import Header from "../header/Header";
import "./home_1.scss";
import { useTranslation } from "react-i18next";
function Home_1() {
  const { t } = useTranslation();

  return (
    <div className="home_container height_  one_list_height" id="home">
      <Header />
      <div className="container ">
        <div className="content_">
          <span className="title_">
             {t("home_page.title")}
          </span>

          <span className="body_">
          {t("home_page.body")}
             
          </span>
          <BtnBgNone/> 
        </div>
      </div>
    </div>
  );
}

export default Home_1;
