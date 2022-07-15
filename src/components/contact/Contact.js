import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BtnBg from "../btn/BtnBg";
import { toast } from "react-toastify";
import "./contact.scss";
import { Context } from "../../App";
import Aos from "aos";
function Contact() {
  useEffect(() => {
    Aos.init();
  });
  const getContext = useContext(Context);
  const { api, setApi } = getContext;
  const { t } = useTranslation();
  function OnSubmitForm(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const textarea = e.target[3].value;
    const a = api;
    if (name === "" && phone === "" && email === "" && textarea === "") {
      toast.error(t("toastify.error"));
    } else {
      a.push({ id: a.length + 1, name:name, phone:phone, email:email, textarea:textarea });
      setApi({ api: a });
      console.log(a);
      toast.success(t("toastify.success"));
    }
  }
  return (
    <div className="contact_container height_" id="contact">
      <div className="container">
        <div className="content_ page_padding">
          <span className="name_" data-aos="zoom-in-up"
              data-aos-duration="700"> {t("contact_page.link")}</span>
          <span className="title_" data-aos="zoom-in-up"
              data-aos-duration="900">{t("contact_page.title")}</span>
          <div className="contain_">
            <form onSubmit={OnSubmitForm} className="form_" id={"formId"}>
              <div className="block_">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact_page.contact.form_placeholder.1")}
                  className="input_ input_name"
                  data-aos="zoom-in-right"
              data-aos-duration="900"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("contact_page.contact.form_placeholder.2")}
                  className="input_ input_phone"
                  data-aos="zoom-in-right"
              data-aos-duration="900"
                />

                <input
                  type="email"
                  name="emil"
                  placeholder={t("contact_page.contact.form_placeholder.3")}
                  className="input_ input_email"
                  data-aos="zoom-in-right"
              data-aos-duration="900"
                />
              </div>
              <div className="block_">
                <textarea
                  name="textarea"
                  placeholder={t("contact_page.contact.form_placeholder.4")}
                  className="textarea_ " data-aos="zoom-in-left"
                  data-aos-duration="900"
                ></textarea>
                <button className="btn_bg_" form={"formId"}data-aos="zoom-in-left"
              data-aos-duration="900" >
                  {t("submit")}
                </button>
              </div>
            </form>
            <div className="context_">
              <p className="title_2" data-aos="zoom-in-up"
              data-aos-duration="700">
                {t("contact_page.contact.text.title")}
              </p>
              <div className="box_"data-aos="zoom-in-up"
              data-aos-duration="800">
                <span className="title_3">
                  {t("contact_page.contact.text.job_time")}
                </span>
                <span className="job_time">09:00-20:00</span>
              </div>
              <div className="box_"data-aos="zoom-in-up"
              data-aos-duration="850">
                <span className="title_3">
                  {t("contact_page.contact.text.tel")}
                </span>
                <a href="tel:+99898 888 12 52" className="phone_num">
                  +998 98 888 12 52
                </a>
              </div>
              <div className="box_"data-aos="zoom-in-up"
              data-aos-duration="900">
                <span className="title_3">
                  {t("contact_page.contact.text.pochta")}
                </span>
                <a href="https://www.instagram.com/terra_techcomp" className="email_time">
                https://www.instagram.com/terra_techcomp 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
