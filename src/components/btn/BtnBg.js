import React from 'react'
import { useTranslation } from "react-i18next";
function BtnBg() {
  const { t } = useTranslation();
  return (
    <>
        <a href='#' className="btn_bg_">{t("learn_more_btn")}</a>
    </>
  )
}

export default BtnBg