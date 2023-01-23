import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <section className="left">
        <ul>
          <li>
            <a href="/">Lindedin</a>
          </li>
          <li>
            <a href="/">Crunchbase</a>
          </li>
          <li>
            <a href="/">Hackernews</a>
          </li>
        </ul>
      </section>
      <section className="right">
        <img src='../assets/img/logo-footer.svg' alt="Logo Batatabit 2020" />
      </section>
    </footer>
  );
};

export default Footer;
