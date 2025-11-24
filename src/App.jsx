import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import AnalysisInvestment from "./pages/Analysis";
import Disclaimer from "./pages/Disclaimer";
import Guidebook from "./pages/Guidebook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analysis" element={<AnalysisInvestment />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/guidebook" element={<Guidebook />} />
    </Routes>
  </BrowserRouter>
);
