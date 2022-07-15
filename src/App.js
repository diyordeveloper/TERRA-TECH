import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./All";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "./Api/Api";
import "aos/dist/aos.css";

export const Context = createContext();

function App() {
  const [api, setApi] = useState([]);

  return (
    <Context.Provider value={{api,setApi}}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
