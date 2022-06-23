import React from "react";
import "./footer.scss";
import logo from "../../assets/logo_svg/logo.png";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  return (
    <div className="footer_container height_md">
      <div className="container">
        <div className="content_">
          <img src={logo} className={"logo_"} alt="Error!!!!" />
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
          </ul>
          <p className="body_">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            dolore magni earum exercitationem possimus ab. Velit iure, quae
            voluptatibus cumque ipsa consectetur numquam nesciunt quidem
            pariatur, esse unde vel ad! Excepturi cum nemo laborum voluptatum .
          </p>
          <div className="messenger_">
            <div className="border_">
              <FacebookIcon className="icon_" />
            </div>
            <div className="border_">
              <TwitterIcon className="icon_" />
            </div>
            <div className="border_">
              <InstagramIcon className="icon_" />
            </div>
            <div className="border_">
              <LinkedInIcon className="icon_" />
            </div>
            <div className="border_">
              <TelegramIcon className="icon_" />
            </div>
          </div>
        </div>
      </div>
      <hr className="hr_" />
      <div className="div_link">
      <a href="#" className="footer_link">
        Copyright 2022 Planet Roc. All rights reserved.
      </a>
      </div>
    </div>
  );
}

export default Footer;
