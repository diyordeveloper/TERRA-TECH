import React from "react";
import "./about.scss";
function About() {
  return (
    <div className="about_container height_">
      <div className="container">
        <div className="content_">
          <div className="block_">
            <span className="name_">About Us</span>
            <span className="title_">
              The Next-Generation Digital Currency <br /> Exchange
            </span>
            <span className="body_">
              Sed ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur architecto accusantium minima blanditiis doloribus!
              Molestias voluptas obcaecati soluta quis architecto. Consectetur{" "}
              <br />
              mollitia, nesciunt tempora dignissimos laborum fuga. Atque, ipsa
              natus!
            </span>
            <span className="body_">
              Nemo ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur architecto accusantium minima blanditiis doloribus!
              Molestias voluptas obcaecati soluta quis architecto. Consectetur{" "}
              <br />
              natus!
            </span>
            <button className="btn_bg_">Learn More</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default About;
