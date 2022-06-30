import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BtnBg from "../btn/BtnBg";
import "./contact.scss";
function Contact() {
  const { t } = useTranslation(); 
  const OnSubmitForm = (e) => {
    e.preventDefault();
   var name =  e.target[0].value
   var phone =  e.target[1].value
   var email =  e.target[2].value
   var textarea =  e.target[3].value 
    console.log("bratan frontendga backend ulanmagan ((((");
    if (name == ""  && phone == ""  && email == "" &&  textarea == "") {
      alert("s")  

    }
  };
  return (
    <div className="contact_container height_">
      <div className="container">
        <div className="content_">
          <span className="name_">{t("contact_page.link")}</span>
          <span className="title_">{t("contact_page.title")}</span>
          <div className="contain_">
            <form id={"contactSubmit"} onSubmit={OnSubmitForm}  className="form_">
              <div className="block_">
                <input 
                  type={"text"}
                  name="name"
                  placeholder={t("contact_page.contact.form_placeholder.1")}
                  className="input_ input_name"
                />
                <input 
                  type={"tel"}
                  name="phone"
                  placeholder={t("contact_page.contact.form_placeholder.2")}
                  className="input_ input_phone"
                />

                <input
                  
                  type={"email"}
                  name="emil"
                  placeholder={t("contact_page.contact.form_placeholder.3")}
                  className="input_ input_email"
                />
              </div>
              <div className="block_">
                <textarea
                  name="textarea"
                  placeholder={t("contact_page.contact.form_placeholder.4")}
                  className="textarea_ "
                ></textarea>
                <button form={"contactSubmit"} type={"button"} className="btn_bg_">
                 {t("submit")}
                </button>
              </div>
            </form>
            <div className="context_">
              <span className="title_2">{t("contact_page.contact.text.title")}</span>
              <div className="box_">
                <span className="title_3">{t("contact_page.contact.text.tel")}</span>
                <span className="job_time">09:00-20:00</span>
              </div>
              <div className="box_">
                <span className="title_3">{t("contact_page.contact.text.job_time")}</span>
                <a href="tel:+99898 888 12 52" className="phone_num">
                  +998 98 888 12 52
                </a>
              </div>
              <div className="box_">
                <span className="title_3">{t("contact_page.contact.text.pochta")}</span>
                <a href="email:terra_tech@gmail.com" className="email_time">
                  terra_tech@gmail.com
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
