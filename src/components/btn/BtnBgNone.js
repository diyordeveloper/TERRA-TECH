import React from 'react'
import { useTranslation } from "react-i18next";

function BtnBgNone() {
  const { t } = useTranslation();
  return (
    <>
        <a href='#' className="btn_bg_transparent">{t("learn_more_btn")}</a>
    </>
  )
}

export default BtnBgNone