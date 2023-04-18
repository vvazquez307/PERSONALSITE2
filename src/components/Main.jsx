import React from "react";
import { Navbar, Home, Footer } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="page-container">
      <BrowserRouter>
        <Navbar />
        <div id="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Main;
