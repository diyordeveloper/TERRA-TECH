import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./partners.scss";
import "./swipper.scss";

// import required modules
 
import logo1 from "../../assets/img/Logo Ashurov.png";
import logo2 from "../../assets/img/Ned Vij.png";
import logo3 from "../../assets/img/teachMe.png";
import logo4 from "../../assets/img/universitY.png";
import logo5 from "../../assets/img/WeHelp.png";
import Aos from "aos";

function Partners() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="partners_container height_" id="partners">
      <div className="container">
        <div className="content_ page_padding">
          <span className="name_" data-aos="zoom-in-up" data-aos-duration="700">
            {t("partners_page.link")}
          </span>
          <span
            className="title_"
            data-aos="zoom-in-up"
            data-aos-duration="900"
          >
            {t("partners_page.title")}
          </span>

          <div className="carousel_">
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                300: {
                  slidesPerView: 3,
                },
                800: {
                  slidesPerView: 4,
                },
                // when window width is >= 768px
                1000: {
                  slidesPerView: 6,
                },
              }}
              modules={{ Pagination, Autoplay }}
              spaceBetween={30}
              loop
              slidesPerGroup={1}
              autoplay={{ delay: 1000 }}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={logo1}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={logo2}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={logo3}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={logo4}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={logo5}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide> 
            </Swiper>
          </div>

          <div className="div_btn">
            <a
              href="#"
              className="btn_bg_"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              {t("learn_more_btn")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
