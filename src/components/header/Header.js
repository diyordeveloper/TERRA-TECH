import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo_svg/logo.png";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [navClick, setNavClick] = useState(false);
  // const [navfixed,setNavFixed] = useState(true)
  function onClickNav() {
    setNavClick(!navClick);
  }
  // const onNavFixed=()=>{
  //   if(window.scrollY >= 90){
  //     setNavFixed(true)
  //   }else{
  //     setNavFixed(false)
  //   }
  // }

  // window.addEventListener("scroll",onNavFixed)

  return (
    <>
      <div className="container">
        <div className={"nav_"}>
          <ul className="ul_logo">
            <li>
              <a href="#" className="logo">
                <img src={logo} alt="Error" />
              </a>
            </li>
          </ul>
          <ul className="ul_">
            <li>
              <a href="#" className="link_">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link_">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="link_">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="btn_bg_">
                invest now
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_bar">
          <ul className="ul_logo">
            <li>
              <a href="#" className="logo">
                <img src={logo} alt="Error" />
              </a>
            </li>
          </ul>
          <ul className="ul_">
            <li>
              <IconButton onClick={onClickNav}>
                <MenuIcon className="icon_" />
              </IconButton>
            </li>
          </ul>
        </div>
        <div className={navClick ? "nav_menu active_" : "nav_menu"}>
          <IconButton onClick={onClickNav} className="iconbutton_">
            <CloseIcon className="icon_" />
          </IconButton>
          <ul className="ul_logo">
            <li>
              <a href="#" className="logo">
                <img src={logo} alt="Error" />
              </a>
            </li>
          </ul>
          <ul className="ul_">
            <li>
              <a href="#" className="link_">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link_">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="link_">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="btn_bg_">
                invest now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
