import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Special from "./components/special/Special";
import SpaceX from "./components/spacex/SpaceX";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Strategiya from "./components/strategiya/Strategiya";

function All() {
  return (
    <>
      <div className="wrapper">
        <Home />
        <About />
        <Service />
        <Special />
        <SpaceX />
        <Strategiya />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default All;
