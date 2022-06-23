import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./All";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
