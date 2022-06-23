import React from "react";
import Header from "../header/Header";
import "./home_1.scss";

function Home_1() {
  return (
    <div className="home_container height_">
      <Header />
      <div className="container ">
        <div className="content_">
          <span className="title_">
            the Next-Generation Digital <br /> Currency Exchange
          </span>

          <span className="body_">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur architecto accusantium <br /> minima blanditiis
            doloribus! Molestias voluptas obcaecati soluta quis architecto.
            Consectetur <br />
            mollitia, nesciunt tempora dignissimos laborum fuga. Atque, ipsa
            natus!
          </span>
          <button className="btn_bg_transparent">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home_1;
