import React from "react";
import "./team.css";
import adrian from "../../assets/img/Adrian.png";
import jess from "../../assets/img/Jessica.png";
import luis from "../../assets/img/Luis.png";
import holly from "../../assets/img/Holly.png";
import kevin from "../../assets/img/Kevin.png";
import cathy from "../../assets/img/Catherine.png";
import oscar from "../../assets/img/Oscar.png";
import emily from "../../assets/img/Emily.png";
import pablo from "../../assets/img/Pablo.png";

const Team = () => {
  const data = {
    adrian: {
      imagen: adrian,
      name: "Adrián Catalán",
      description: "Innovation Lab Leader and Google Developer Expert."
    },
    jessica: {
      imagen: jess,
      name:"Jessica Hernández",
      description: "Interested in Web Development"
    },
    luis: {
      imagen: luis,
      name:"Luis Jimenez",
      description: "Interested in Computer Vision, Hardware and Education."
    },
    holly: {
      imagen: holly,
      name:"Holly Milián",
      description: "Graphic Designer, Illustrator and Amateur Photographer."
    },
    kevin: {
      imagen: kevin,
      name:"Kevin Hernández",
      description: "Interested in Artificial Intelligence and Mobile Development."
    },
    catherine: {
      imagen: cathy,
      name:"Catherine Batres",
      description: ""
    },
    oscar: {
      imagen: oscar,
      name:"Oscar Valle",
      description: ""
    },
    emily: {
      imagen: emily,
      name:"Emily Curín",
      description: ""
    },
    pablo: {
      imagen: pablo,
      name:"Pablo Galicia",
      description: ""
    }
  };

  return (
    <section id="team" className="main-team-container">
      <h2>Innovation Lab Team</h2>
      <div className="team-container--slider">
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.adrian.name}</h3>
            <img src={data.adrian.imagen} alt="Adrian Catalán" />
            <p className="team-card--saving">{data.adrian.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.jessica.name}</h3>
            <img src={data.jessica.imagen} alt="Jessica Hernández" />
            <p className="team-card--saving">{data.jessica.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.pablo.name}</h3>
            <img src={data.pablo.imagen} alt="Pablo Galicia" />
            <p className="team-card--saving">{data.pablo.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.luis.name}</h3>
            <img src={data.luis.imagen} alt="Luis Jimenez" />
            <p className="team-card--saving">{data.luis.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.holly.name}</h3>
            <img src={data.holly.imagen} alt="Holly Milián" />
            <p className="team-card--saving">{data.holly.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.kevin.name}</h3>
            <img src={data.kevin.imagen} alt="Kevin Hernández" />
            <p className="team-card--saving">{data.kevin.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.catherine.name}</h3>
            <img src={data.catherine.imagen} alt="Catherine Batrés" />
            <p className="team-card--saving">{data.catherine.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.oscar.name}</h3>
            <img src={data.oscar.imagen} alt="Oscar Valle" />
            <p className="team-card--saving">{data.oscar.description}</p>
          </div>
        </div>
        <div className="team-container--card">
          <div className="team-card">
            <h3 className="team-card--title">{data.emily.name}</h3>
            <img src={data.emily.imagen} alt="Emily Curín" />
            <p className="team-card--saving">{data.emily.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
