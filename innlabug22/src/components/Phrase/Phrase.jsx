import React from "react";
import "./phrase.css";

const Phrase = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <h2>Nothing is a mistake</h2>
        <h2>There's no win and no fail, there's only make.</h2>
        <h3>-Corina Kent</h3>
      </div>
      <div className="col-lg-4">
        <iframe
          width="250"
          src="https://www.youtube.com/embed/NK3GVn-qq6A"
          title="InnovationLab"
          className="video"
        />
      </div>
    </div>
  );
};

export default Phrase;
