import Aos from "aos";
import React, { useEffect } from "react";
import cosmos from "../../assets/background/cosmos.png";
import "./spacex.scss";

function SpaceX() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="spacex_container height_sm">
      <div className="container">
        <div
          className="content_"
          data-aos="zoom-in-up"
          data-aos-duration="900"
        >
          <img src={cosmos} className={"cosmos"} alt="Error" />
        </div>
      </div>
    </div>
  );
}

export default SpaceX;
