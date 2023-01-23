import React, { Fragment } from "react";
import "./projects.css";
import "animate.css";
import Menu from "../Menu/Menu";


const Projects = () => {
  return (
    <Fragment>
      <section className="topSection" id="top">
        <Menu url={"/projects"}/>
        <div className="texto1">
          <h1 className="welcome">Welcome to Projects</h1>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
