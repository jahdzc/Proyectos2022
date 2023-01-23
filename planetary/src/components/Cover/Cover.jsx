import React, { Fragment } from "react";
import "./cover.css";
import together from "../../assets/together.png";
import mercury from "../../assets/images/planet-mercury.svg";
import venus from "../../assets/images/planet-venus.svg";
import earth from "../../assets/images/planet-earth.svg";
import mars from "../../assets/images/planet-mars.svg";
import jupiter from "../../assets/images/planet-jupiter.svg";
import saturn from "../../assets/images/planet-saturn.svg";
import uranus from "../../assets/images/planet-uranus.svg";
import neptune from "../../assets/images/planet-neptune.svg";
import "animate.css";

const Cover = () => {
  return (
    <Fragment>
      <section className="topSectionCover" id="topSection">
        <div className="row">
          <img src={together} alt="Animación" className="together" />
          <h1 className="welcome">Welcome to Space</h1>
        </div>
      </section>
      <section className="bottomSectionCover " id="bottomSec">
        <h1 className="mid">Discover Solar System</h1>
        <figure>
          <a href="/mercury">
            <img src={mercury} alt="Mercury" className="mercury" />
          </a>
          <figcaption className="caption">Mercury</figcaption>
        </figure>
        <figure>
          <a href="/venus">
            <img src={venus} alt="Venus" className="venus" />
          </a>
          <figcaption className="caption">Venus</figcaption>
        </figure>

        <figure>
          <a href="/earth">
            <img src={earth} alt="Earth" className="earth" />
          </a>
          <figcaption className="caption">Earth</figcaption>
        </figure>

        <figure>
          <a href="/mars">
            <img src={mars} alt="Mars" className="mars" />
          </a>
          <figcaption className="caption">Mars</figcaption>
        </figure>

        <figure>
          <a href="/jupiter">
            <img src={jupiter} alt="Jupiter" className="jupiter" />
          </a>
          <figcaption className="caption">Jupiter</figcaption>
        </figure>

        <figure>
          <a href="/saturn">
            <img src={saturn} alt="Saturn" className="saturn" />
          </a>
          <figcaption className="caption">Saturn</figcaption>
        </figure>

        <figure>
          <a href="/uranus">
            <img src={uranus} alt="Uranus" className="uranus" />
          </a>
          <figcaption className="caption">Uranus</figcaption>
        </figure>

        <figure>
          <a href="/neptune">
            <img src={neptune} alt="Neptune" className="neptune" />
          </a>
          <figcaption className="caption">Neptune</figcaption>
        </figure>
      </section>
    </Fragment>
  );
};

export default Cover;
