import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div id="navbar">
      <div>
        <Link to="/">
          <img
            id="navbar-img"
            src="./images/navbar/AC-img.png"
            alt="nice looking image"
          />
        </Link>
      </div>
      <div>
        <h2 id="navbar-title">Victor Vazquez's Personal Site</h2>
      </div>
      <div id="navbar-DM">
        <div className="dropdown">
          <button
            onClick={() => {
              dropDownMenu();
            }}
            className="dropbtn"
          >
            More
          </button>
          <div id="myDropdown" className="dropdown-content">
            <Link to="/projects">Projects</Link>
            <Link to="/contact-info">Contact Me!</Link>
            <Link to="https://www.youtube.com/" target="_blank">
              Link 3
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
