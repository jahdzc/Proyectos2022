import React, { Fragment } from "react";
import "./frontpage.css";
import "animate.css";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
/*import cube from "../../assets/Cube.png";*/

const FrontPage = () => {
  const paragraph = {
    background: "yellow", 
    fontWeight: "bold",
    padding: "1%",
    color: "black"
  }
  return (
    <Fragment>
      <section className="topSectionFront" id="top">
        <Menu url={"/"} />
        <div className="portada">
          <h1 className="welcome">Welcome to Innovation Lab</h1>
          <div className="cuadroAzul">
            <div className="cuadroAmarillo">
              <p className="text">Nothing is a mistake. There´s no win and no fail, there´s <span style={paragraph}>Only make</span></p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </Fragment>
  );
};

export default FrontPage;
