import React from "react";
import { Navbar, Home, Footer, Contact, Projects } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="page-container">
      <BrowserRouter>
        <Navbar />
        <div id="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-info" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Main;
