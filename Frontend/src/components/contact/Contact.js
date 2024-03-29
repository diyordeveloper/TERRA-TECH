import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "./contact.scss";
import Aos from "aos";
import axios from "axios";
function Contact() {
  useEffect(() => {
    Aos.init();
  });
  const { t } = useTranslation();
  function OnSubmitForm(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const telefon = e.target[1].value;
    const email = e.target[2].value;
    const textarea = e.target[3].value;
    
    let data = {
      full_name:name,
      phone:telefon, 
      bussines_type:email,
      interesting_service:textarea
    }
    ;
    if ((name === "", telefon === "", email === "", textarea === "")) {
      toast.error(t("toastify.error"));
    } else {
      axios
        .post("http://localhost:8000/google_sheet/create_google_cheet", data)
        .then((response) => {
          console.log(response.status);
        });
      toast.success(t("toastify.success"));
      console.log(data);
      e.target[0].value = "";                                                                  
      e.target[1].value = "";                                                                  
      e.target[2].value = "";                                                                  
      e.target[3].value = "";                                                                  
    }
  }
  return (
    <div className="contact_container height_" id="contact">
      <div className="container">
        <div className="content_ page_padding">
          <span className="name_" data-aos="zoom-in-up" data-aos-duration="700">
            {" "}
            {t("contact_page.link")}
          </span>
          <span
            className="title_"
            data-aos="zoom-in-up"
            data-aos-duration="900"
          >
            {t("contact_page.title")}
          </span>
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
                  type="number"
                  name="phone"
                  placeholder={t("contact_page.contact.form_placeholder.2")}
                  className="input_ input_phone"
                  data-aos="zoom-in-right"
                  data-aos-duration="900"
                />

                <input
                  type="text"
                  name="text"
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
                  className="textarea_ "
                  data-aos="zoom-in-left"
                  data-aos-duration="900"
                ></textarea>
                <button
                  className="btn_bg_"
                  form={"formId"}
                  data-aos="zoom-in-left"
                  data-aos-duration="900"
                >
                  {t("submit")}
                </button>
              </div>
            </form>
            <div className="context_">
              {/* <p
                className="title_2"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                {t("contact_page.contact.text.title")}
              </p> */}
              <div
                className="box_"
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                <span className="title_3">
                  {t("contact_page.contact.text.job_time")}
                </span>
                <span className="job_time">09:00-20:00</span>
              </div>
              <div
                className="box_"
                data-aos="zoom-in-up"
                data-aos-duration="850"
              >
                <span className="title_3">
                  {t("contact_page.contact.text.tel")}
                </span>
                <a href="tel:+99898 888 12 52" className="phone_num">
                  +998 98 888 12 52
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
