import React, { useEffect, useState } from "react";
import Home_1 from "./components/home_1/Home_1";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Special from "./components/special/Special";
import SpaceX from "./components/spacex/SpaceX";
import Dolorem from "./components/dolorem/Dolorem";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer"; 
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style/my.css";
import "./assets/style/style.scss"; 
 
function All() {
  return (
    <>
      <div className="wrapper">
        
        
        <Home_1 />
        <About />
        <Service />
        <Special />
        <SpaceX />
        <Dolorem />
        <Partners />
        <Footer /> 
      </div>
    </>
  );
}

export default All;
