import React, { Fragment } from "react";
import "./header.css";
import logo from "../../assets/icon/LogoO.png";

const Header = () => {
  const data = {
    imagen: logo,
    a: "Know our team",
  };

  return (
    <Fragment>
      <header>
        <div className="header-fixed">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">my work</a>
            </li>
            <li>
              <a href="/">disegn</a>
            </li>
            <li>
              <a href="/">dcontact</a>
            </li>
          </ul>
        </div>
        <div className="header-no-fixed">
          <img src={data.imagen} alt="Innovation Lab Logo" />
          <div className="header--title-container">
            <a href="#team" className="header--button">
              {data.a} <span></span>
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
