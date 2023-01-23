import React from "react";
import logoH from "../../assets/LogoH.PNG";
import "./menu.css"

const Menu = (props) => {
  /*console.log(props);*/
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        <img src={logoH} alt="Logo" height="40" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav ml-auto ">
          {props.url === "/projects" ? (
            <></>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
          )}

          {props.url === "/aboutUs" ? (
            <></>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/aboutUs">
                About Us
              </a>
            </li>
          )}

          {props.url === "/workshops" ? (
            <></>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/workshops">
                Workshops
              </a>
            </li>
          )}

          {props.url === "/team" ? (
            <></>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/team">
                Team
              </a>
            </li>
          )}

          {props.url === "/" ? (
            <></>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
