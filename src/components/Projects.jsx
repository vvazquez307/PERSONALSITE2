import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }
  return (
    <div id="projects-container">
      <div id="project1">
        <h1 id="project-title">DriveZe!</h1>
        <p>
          <Link
            className="text-link"
            to="https://driveze.netlify.app/"
            target="_blank"
          >
            https://driveze.netlify.app/
          </Link>
        </p>
        <img className="project_img" src="/images/projects/DriveZe.png" />
        <p id="project description">
          This project is special to me because it is the last project I worked
          on at fullstack. The name of the project is DriveZe, and I worked on
          it along with 3 other classmates. DriveZe Website features safe
          login/register/logout, all products page, a locations page that
          features google maps, a profile section where the logged in user can
          edit their information, cart and checkout, as well as admin
          functionality so that products/hubs can be updated online.
        </p>
        <p>
          Not to mention this whole project has its own database that the
          website can pull data from it by using api calls.
        </p>
        <p>
          The Backend of this project was all made with postgresql, and bcrypt
          for hashing information. The frontend was made using react and
          react-router-dom for that effortless route making, css for styling the
          whole website. DriveZe was deployed using netlify. For more
          information visit the DriveZe repo:{" "}
          <Link
            className="text-link"
            to="https://github.com/TheHighnote/DrivEze-Backend"
            target="_blank"
          >
            DriveZe-Backend: https://github.com/TheHighnote/DrivEze-Backend
          </Link>{" "}
          or{" "}
          <Link
            className="text-link"
            to="https://github.com/vvazquez307/DrivEze"
            target="_blank"
          >
            DriveZe-Frontend: https://github.com/vvazquez307/DrivEze
          </Link>
        </p>
      </div>
      <button
        id="project-back-btn"
        onClick={() => {
          navigateHome();
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Projects;
