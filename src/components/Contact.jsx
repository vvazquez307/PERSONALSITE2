import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }
  return (
    <div id="contact-content">
      <div id="contact-box">
        <div className="h2-center">
          <h1>Contact Information</h1>
        </div>
        <div id="contact-info">
          <h2 className="h2-center">Email: Vvazquez307.w@gmail.com</h2>
          <h2 className="h2-center">Phone Number: 773-396-6632</h2>
          <h2 className="h2-center">
            LinkedIn Profile: {` `}
            <Link
              className="text-link"
              to="https://www.linkedin.com/in/victor-vazquez-971268272/"
              target="_blank"
            >
              Click Here!
            </Link>
          </h2>
          <h2 className="h2-center">
            Github Profile: {` `}
            <Link
              className="text-link"
              to="https://github.com/vvazquez307"
              target="_blank"
            >
              Click Here!
            </Link>
          </h2>
        </div>
        <button
          id="contact-back-btn"
          onClick={() => {
            navigateHome();
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
