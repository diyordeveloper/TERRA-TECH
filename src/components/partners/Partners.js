import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./partners.scss";
import "./swipper.scss";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import category_1 from "../../assets/img/category_1.png";
import category_2 from "../../assets/img/category_2.png";
import category_3 from "../../assets/img/category_3.png";
import category_4 from "../../assets/img/category_4.png";
import category_5 from "../../assets/img/category_5.png";
import category_6 from "../../assets/img/category_6.png";

function Partners() {
  return (
    <div className="partners_container height_">
      <div className="container">
        <div className="content_">
          <span className="name_">Our Partners</span>
          <span className="title_">Ut Enim ad minim veniam
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
                    src={category_1}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_2}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_3}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_4}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_5}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_5}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_6}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_4}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box_">
                  <img
                    src={category_5}
                    className={"category_img"}
                    alt="Error!!!"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <span className="titl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <div className="text_">
            <span className="bady_">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur vel illo velit doloribus cupiditate dolorum. Debitis obcaecati similique ea, enim dicta, sapiente architecto beatae, eveniet laboriosam cupiditate error impedit aut inventore minus!
            </span>
            <span className="bady_">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur vel illo velit doloribus cupiditate dolorum. Debitis obcaecati similique ea, enim dicta, sapiente architecto beatae, eveniet laboriosam cupiditate error impedit aut inventore minus!
            </span>
          </div>
         <div className="div_btn">
         <button className="btn_bg_ ">Learn More</button>
         </div>

        </div>
      </div>
    </div>
  );
}

export default Partners;
