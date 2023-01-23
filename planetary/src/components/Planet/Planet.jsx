import React, { Fragment, useState } from "react";
import "./planet.css";
import mercury from "../../assets/images/planet-mercury.svg";
import internMer from "../../assets/images/planet-mercury-internal.svg";
import surfMer from "../../assets/images/planet-mercury-geology.png";
import venus from "../../assets/images/planet-venus.svg";
import internVen from "../../assets/images/planet-venus-internal.svg";
import surfVen from "../../assets/images/planet-venus-geology.png";
import earth from "../../assets/images/planet-earth.svg";
import internEar from "../../assets/images/planet-earth-internal.svg";
import surfEar from "../../assets/images/planet-earth-geology.png";
import mars from "../../assets/images/planet-mars.svg";
import internMar from "../../assets/images/planet-mars-internal.svg";
import surfMar from "../../assets/images/planet-mars-geology.png";
import jupiter from "../../assets/images/planet-jupiter.svg";
import internJup from "../../assets/images/planet-jupiter-internal.svg";
import surfJup from "../../assets/images/planet-jupiter-geology.png";
import saturn from "../../assets/images/planet-saturn.svg";
import internSat from "../../assets/images/planet-saturn-internal.svg";
import surfSat from "../../assets/images/planet-saturn-geology.png";
import uranus from "../../assets/images/planet-uranus.svg";
import internUr from "../../assets/images/planet-uranus-internal.svg";
import surfUr from "../../assets/images/planet-uranus-geology.png";
import neptune from "../../assets/images/planet-neptune.svg";
import internNep from "../../assets/images/planet-neptune-internal.svg";
import surfNep from "../../assets/images/planet-neptune-geology.png";

const Planet = (props) => {
  const data = {
    mercury: {
      description:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      internalText:
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      surface:
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      imagen1: mercury,
      imagen2: internMer,
      imagen3: surfMer,
      rot: "58.6 Days",
      rev: "87.97 Days",
      rad: "2,439.7 KM",
      ave: "430°C",
    },
    venus: {
      description:
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      internalText:
        "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      surface:
        "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      imagen1: venus,
      imagen2: internVen,
      imagen3: surfVen,
      rot: "243 Days",
      rev: "224.7 Days",
      rad: "6,051.8 KM",
      ave: "471°C",
    },
    earth: {
      description:
        "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      internalText:
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      surface:
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      imagen1: earth,
      imagen2: internEar,
      imagen3: surfEar,
      rot: "0.99 Days",
      rev: "365.26 Days",
      rad: "6,371 KM",
      ave: "16°C",
    },
    mars: {
      description:
        'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet."',
      internalText:
        "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      surface:
        "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      imagen1: mars,
      imagen2: internMar,
      imagen3: surfMar,
      rot: "1.03 Days",
      rev: "1.88 Days",
      rad: "3,389.5 KM",
      ave: "-28°C",
    },
    jupiter: {
      description:
        "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      internalText:
        "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      surface:
        "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      imagen1: jupiter,
      imagen2: internJup,
      imagen3: surfJup,
      rot: "9.93 Hours",
      rev: "11.86 Days",
      rad: "69,911 KM",
      ave: "-108°C",
    },
    saturn: {
      description:
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
      internalText:
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      surface:
        "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      imagen1: saturn,
      imagen2: internSat,
      imagen3: surfSat,
      rot: "10.8 Hours",
      rev: "29.46 Years",
      rad: "58,232 KM",
      ave: "-138°C",
    },
    uranus: {
      description:
        "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      internalText:
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      surface:
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      imagen1: uranus,
      imagen2: internUr,
      imagen3: surfUr,
      rot: "17.2 Hours",
      rev: "84 Years",
      rad: "25,362 KM",
      ave: "-195°C",
    },
    neptune: {
      description:
        "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
      internalText:
        "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      surface:
        "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      imagen1: neptune,
      imagen2: internNep,
      imagen3: surfNep,
      rot: "16.08 Hours",
      rev: "164.79 Years",
      rad: "24,622 KM",
      ave: "-201°C",
    },
  };
  const [primera, setPrimera] = useState(true);
  const [segunda, setSegunda] = useState(false);
  const [tercera, setTercera] = useState(false);
  const [texto, setTexto] = useState(data[props.namePlanet]["description"]);
  function overview() {
    setTexto(data[props.namePlanet]["description"]);
    setPrimera(true);
    setSegunda(false);
    setTercera(false);
  }
  function internal() {
    setTexto(data[props.namePlanet]["internalText"]);
    setPrimera(false);
    setSegunda(true);
    setTercera(false);
  }
  function surface() {
    setTexto(data[props.namePlanet]["surface"]);
    setPrimera(false);
    setSegunda(false);
    setTercera(true);
  }
  return (
    <Fragment>
      <section className="topSection" id="top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/mercury">
                    Mercury
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/venus">
                    Venus
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/earth">
                    Earth
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/mars">
                    Mars
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/jupiter">
                    Jupiter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/saturn">
                    Saturn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/uranus">
                    Uranus
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/neptune">
                    Neptune
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-lg-6">
              <div className="planet">
                {primera && (
                  <img
                    src={data[props.namePlanet]["imagen1"]}
                    alt="Planeta"
                    className="planeta"
                  />
                )}
                {segunda && (
                  <img
                    src={data[props.namePlanet]["imagen2"]}
                    alt="Internamente"
                    className="planeta"
                  />
                )}
                {tercera && (
                  <img
                    src={data[props.namePlanet]["imagen3"]}
                    alt="Superficie"
                    className="planeta"
                  />
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="desc">
                <h1>{props.namePlanet.toUpperCase()}</h1>
                <p>{texto}</p>
                <div className="buttons">
                  <div className="op" onClick={overview}>
                    <p className="pop">Overview</p>
                  </div>
                  <div className="op" onClick={internal}>
                    <p className="pop">Internal Structure</p>
                  </div>
                  <div className="op" onClick={surface}>
                    <p className="pop">Surface Geology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bottomSec" id="bottomSection">
        <div className="row">
            <div className="boxes">
              <h6>ROTATION TIME</h6>
              <h1>{data[props.namePlanet]["rot"]}</h1>
            </div>
            <div className="boxes">
              <h6>REVOLUTION TIME</h6>
              <h1>{data[props.namePlanet]["rev"]}</h1>
            </div>
            <div className="boxes">
              <h6>RADIUS</h6>
              <h1>{data[props.namePlanet]["rad"]}</h1>
            </div>
            <div className="boxes">
              <h6>AVERAGE TEMP</h6>
              <h1>{data[props.namePlanet]["ave"]}</h1>
            </div>
          </div>

      </section>
    </Fragment>
  );
};

export default Planet;
