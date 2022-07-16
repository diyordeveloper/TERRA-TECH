import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style/my.css";
import "./assets/style/style.scss"; 
import "./assets/style/lang.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fallback={
      <div
        className="d-flex align-items-center justify-content-center "
        style={{ height: "100vh" }}
      >
        <h1>Loading...</h1>
      </div>
    }
  >
    <App />
  </Suspense>
);
