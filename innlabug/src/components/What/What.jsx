import React, { Fragment } from "react";
import "./what.css";

const What = () => {
  const section1 = {
    h2: "What is Innovation Lab?",
    p: "The Innovation Laboratory aims to create a link between cutting-edge technologies with Guatemala, promoting their study and research in the hands of international experts and events or projects that encourage research from practice on topics such as design thinking, augmented reality , 3D design, IoT, among others in the mission of turning our participants into technology creators.",
  };
  return (
    <Fragment>
      <main>
        <section className="main-what-container">
          <div className="main-what-container--title">
            <h2>{section1.h2}</h2>
            <p>{section1.p}</p>
          </div>
          <iframe
            src="https://www.youtube.com/embed/NK3GVn-qq6A"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="vid"
            allowFullScreen
            preload = 'auto'
          />
        </section>
      </main>
    </Fragment>
  );
};

export default What;
