import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./All"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
