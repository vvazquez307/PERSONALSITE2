import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-content">
        <div id="footer-img-1">
          <Link to="https://github.com/vvazquez307" target="_blank">
            <img
              className="footer-img"
              src="./images/footer/GitHub_image.png"
              alt="Victor Vazquez's Github"
            />
          </Link>
        </div>
        <div id="footer-img-2">
          <Link
            to="https://www.linkedin.com/in/victor-vazquez-971268272/"
            target="_blank"
          >
            <img
              className="footer-img"
              src="./images/footer/linkedin_image.png"
              alt="Victor Vazquez's LinkedIn"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
