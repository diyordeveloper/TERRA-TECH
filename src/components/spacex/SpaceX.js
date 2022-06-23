import React from "react";
import "./spacex.scss";
import cosmos from "../../assets/background/cosmos.png";
import zigzag from "../../assets/logo_svg/zigzag.png";
function SpaceX() {
  return (
    <div className="spacex_container height_sm">
      <div className="container">
        <div className="content_">
          <img src={cosmos} className={"cosmos"} alt="Error" />
        </div>
      </div>
    </div>
  );
}

export default SpaceX;
