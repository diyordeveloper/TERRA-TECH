import React from "react";
import cosmos from "../../assets/background/cosmos.png";
import "./spacex.scss";

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
