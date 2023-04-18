import React from "react";

const Home = () => {
  return (
    <div id="home">
      <div id="about-container">
        <h1 id="about-title">About Me!</h1>
        <p id="about-text-box">
          My name is Victor Vazquez and I am very passionate about technology.
          As of april 13th 2023 I have graduated from a web development course
          which taught me how to write code in HTML, JS, CSS. I was also taught
          how to use React, React Router DOM. I also learned how to create
          databases using Postgresql and linking them with a front end by using
          api calls.
        </p>
      </div>

      <div id="img-container">
        <img
          className="home_images"
          src="./images/JS_image.png"
          alt="JS image"
        />
        <img
          className="home_images"
          src="./images/PostgreSQL-Logo.png"
          alt="JS image"
        />
        <img
          className="home_images"
          src="./images/React-Router-Dom_image.png"
          alt="JS image"
        />
      </div>
    </div>
  );
};

export default Home;
