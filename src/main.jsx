import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Disclaimer from "./pages/Disclaimer";
import Guidebook from "./pages/Guidebook";

// Tailwind v4 body styling
document.body.className = "bg-gray-50 text-gray-900";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/guidebook" element={<Guidebook />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
