import React from "react";
import "./service.scss";
import moon_ from "../../assets/background/moon_1.png";
import bitcoin_1 from "../../assets/logo_svg/bitcoin_1.png";
import bitcoin_2 from "../../assets/logo_svg/bitcoin_2.png";
import bitcoin_3 from "../../assets/logo_svg/bitcoin_3.png";

function Service() {
  return (
    <div className="service_container height_">
      <div className="container">
        <div className="content_">
          <span className="name_">Services</span>
          <span className="title_">
            Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut
            odit au.
          </span>
          <div className="moon">
            <div className="moon_kub k_right">
              <img src={moon_} className={"moon_img"} alt="Error" />
              <div className="box box_1">
                <div className="text_ end_">
                  <span className="titl">
                    Tangible Art and sports memorabilia NFTs,
                  </span>
                  <span className="bady">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos maxime recusandae blanditiis praesentium?
                  </span>
                </div>
                <div className="kub k_left">
                  <img src={bitcoin_1} className={"bitcoin"} alt="Error!!!" />
                </div>
              </div>
              <div className="box box_2">
                <div className="text_ end_">
                  <span className="titl">NFT Project Development</span>
                  <span className="bady">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos maxime recusandae blanditiis praesentium?
                  </span>
                </div>
                <div className="kub k_left">
                  <img src={bitcoin_2} className={"bitcoin"} alt="Error!!!" />
                </div>
              </div>
              <div className="box box_3">
                <div className="text_ end_">
                  <span className="titl">Digital Asset Managment</span>
                  <span className="bady">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos maxime recusandae blanditiis praesentium?
                  </span>
                </div>
                <div className="kub k_left">
                  <img src={bitcoin_3} className={"bitcoin"} alt="Error!!!" />
                </div>
              </div>
              <div className="box box_11">
                <div className="kub k_right">
                  <img src={bitcoin_1} className={"bitcoin"} alt="Error!!!" />
                </div>
                <div className="text_ start_  ">
                  <span className="titl">
                    Tangible Art and sports memorabilia NFTs,
                  </span>
                  <span className="bady">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos maxime recusandae blanditiis praesentium?
                  </span>
                </div>
              </div>
              <div className="box box_22">
                <div className="kub k_right">
                  <img src={bitcoin_2} className={"bitcoin"} alt="Error!!!" />
                </div>
                <div className="text_ start_  ">
                  <span className="titl">NFT Project Development</span>
                  <span className="bady">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos maxime recusandae blanditiis praesentium?
                  </span>
                </div>
              </div>
              <div className="box box_33">
                <div className="kub k_right">
                  <img src={bitcoin_3} className={"bitcoin"} alt="Error!!!" />
                </div>
                <div className="text_ start_  ">
                  <span className="titl">Digital Asset Managment</span>
                  <span className="bady">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos maxime recusandae blanditiis praesentium?
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="btn_bg_">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
