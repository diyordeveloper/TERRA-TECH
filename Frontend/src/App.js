import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import All from "./All";
// import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import "./assets/style/my.css";
import "./assets/style/style.scss"; 
import "./assets/style/lang.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<All />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
