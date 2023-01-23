import React from "react";
import "./projects.css";
import hexapod1 from "../../assets/proj/Hexapod/Hexapod 1.JPG";
import ar1 from "../../assets/proj/AR/VR 1.JPG";
import mindstorm from "../../assets/proj/Mindstorms EV3/EV3 1.JPG"

const Projects = () => {
  const data = {
    hexapod: {
      name: "Hexapod",
      image: hexapod1,
    },
    ar: {
        name: "Realidad Aumentada",
        image: ar1,
    },
    mindstorm: {
        name: "Mindstorms EV3",
        image: mindstorm
    }

  };
  return (
    <section id="projects" className="main-projects-container">
      <h2>Projects</h2>
      <div className="gallery">
        <div className="team-card">
          <h3 className="team-card--title">{data.hexapod.name}</h3>
          <a href="/">
            <img src={data.hexapod.image} alt="Hexapod" />
          </a>
        </div>
        <div className="team-card">
          <h3 className="team-card--title">{data.ar.name}</h3>
          <a href="/">
            <img src={data.ar.image} alt="Realidad Virtual" />
          </a>
        </div>
        <div className="team-card">
          <h3 className="team-card--title">{data.mindstorm.name}</h3>
          <a href="/">
            <img src={data.mindstorm.image} alt="Mindstorms EV3" />
          </a>
        </div>
        <div className="team-card">
          <h3 className="team-card--title">{data.hexapod.name}</h3>
          <a href="/">
            <img src={data.hexapod.image} alt="Hexapod" />
          </a>
        </div>
        <div className="team-card">
          <h3 className="team-card--title">{data.hexapod.name}</h3>
          <a href="/">
            <img src={data.hexapod.image} alt="Hexapod" />
          </a>
        </div>
        <div className="team-card">
          <h3 className="team-card--title">{data.hexapod.name}</h3>
          <a href="/">
            <img src={data.hexapod.image} alt="Hexapod" />
          </a>
        </div>
        <div className="team-card">
          <h3 className="team-card--title">{data.hexapod.name}</h3>
          <a href="/">
            <img src={data.hexapod.image} alt="Hexapod" />
          </a>
        </div>
        <div className="team-card">
          <h3 className="team-card--title">{data.hexapod.name}</h3>
          <a href="/">
            <img src={data.hexapod.image} alt="Hexapod" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
