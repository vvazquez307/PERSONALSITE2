import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div id="contact-title">
        <h1>Contact Information</h1>
      </div>
      <div id="contact-info">
        <h2>Email: Vvazquez307.w@gmail.com</h2>
        <h2>Phone Number: 773-396-6632</h2>
        <h2>
          LinkedIn Profile: {` `}
          <Link
            className="text-link"
            to="https://www.linkedin.com/in/victor-vazquez-971268272/"
            target="_blank"
          >
            Click Here!
          </Link>
        </h2>
        <h2>
          Github Profile: {` `}
          <Link
            className="text-link"
            to="https://github.com/vvazquez307"
            target="_blank"
          >
            Click Here!
          </Link>
        </h2>
        <button>
          <Link to="/">Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default Contact;
