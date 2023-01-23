import React, { Fragment } from "react";
import Menu from "../Menu/Menu";
import "./team.css";
import adr from "../../assets/Adrian1.jpg";
import jess from "../../assets/Jessica1.jpg";
import luis from "../../assets/Luis1.jpg";
import holly from "../../assets/Holly1.jpg";
import kevin from "../../assets/Kevin1.jpg";
import cathy from "../../assets/Catherine1.jpg";
import oscar from "../../assets/Oscar1.jpg";
import emily from "../../assets/Emily1.jpg";

const Team = () => {
  const data = {
    adrian: {
      imagen: adr,
      name:"Adrián Catalán",
      role:"Team's Leader",
      description: "Innovation Lab leader and Google Developer Expert.",
    },
    jessica: {
      imagen: jess,
      name:"Jessica Hernández",
      role:"",
      description: "",
    },
    luis: {
      imagen: luis,
      name:"Luis Jimenez",
      role:"Projects Leader",
      description: "Interested in computer vision, hardware and education.",
    },
    holly: {
      imagen: holly,
      name:"Holly Milián",
      role:"Graphic Designer",
      description: "Graphic Designer, Illustrator and Amateur Photographer. Love cartoons and draw silly things.",
    },
    kevin: {
      imagen: kevin,
      name:"Kevin Hernández",
      role:"",
      description: "Interested in artificial intelligence and mobile development.",
    },
    catherine: {
      imagen: cathy,
      name:"Catherine Batres",
      role:"",
      description: "",
    },
    oscar: {
      imagen: oscar,
      name:"Oscar Valle",
      role:"",
      description: "",
    },
    emily: {
      imagen: emily,
      name:"Emily Curín",
      role:"",
      description: "",
    }
  }
  return (
    <Fragment>
      <section className="topTeamSection py-2" id="cards">
        <Menu url={"/team"} />
        <div className="team">
          {/*Adrián Catalán*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.adrian.imagen} alt="Integrante" />
            </div>
            <h3>{data.adrian.name}</h3>
            <p className="role">{data.adrian.role}</p>
            <p>{data.adrian.description}</p>
          </div>
          {/*Jessica Hernández*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.jessica.imagen} alt="Integrante" />
            </div>
            <h3>{data.jessica.name}</h3>
            <p className="role">{data.jessica.role}</p>
            <p>{data.jessica.description}</p>
          </div>
          {/*Luis Jimenez*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.luis.imagen} alt="Integrante" />
            </div>
            <h3>{data.luis.name}</h3>
            <p className="role">{data.adrian.role}</p>
            <p>{data.luis.description}</p>
          </div>
          {/*Holly Milián*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.holly.imagen} alt="Integrante" />
            </div>
            <h3>{data.holly.name}</h3>
            <p className="role">{data.adrian.role}</p>
            <p>{data.holly.description}</p>
          </div>
          {/*Kevin Hernández*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.kevin.imagen} alt="Integrante" />
            </div>
            <h3>{data.kevin.name}</h3>
            <p className="role">{data.adrian.role}</p>
            <p>{data.kevin.description}</p>
          </div>
          {/*Catherine Batres*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.catherine.imagen} alt="Integrante" />
            </div>
            <h3>{data.catherine.name}</h3>
            <p className="role">{data.adrian.role}</p>
            <p>{data.catherine.description}</p>
          </div>
          {/*Oscar Valle*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.oscar.imagen} alt="Integrante" />
            </div>
            <h3>{data.oscar.name}</h3>
            <p className="role">{data.adrian.role}</p>
            <p>{data.oscar.description}</p>
          </div>
          {/*Emily Curín*/}
          <div className="teamMember">
            <div className="teamPic">
              <img src={data.emily.imagen} alt="Integrante" />
            </div>
            <h3>{data.emily.name}</h3>
            <p className="role">{data.adrian.role}</p>
            <p>{data.emily.description}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
