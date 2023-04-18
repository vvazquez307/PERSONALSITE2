import React from "react";
import { Navbar, Home } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
