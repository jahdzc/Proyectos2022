import React from "react";
import './section4.css';

const Section4 = () => {
  return (
    <section id="plans" className="main-plans-container">
      <h2>Escoge el plan que mejor se ajuste a ti.</h2>
      <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      <div className="plans-container--slider">
        <div className="plans-container--card">
          <div className="plan-card">
            <h3 className="plan-card--title">Pago Anual</h3>
            <p className="plan-card--price">
              <span>$</span> 99
            </p>
            <p className="plan-card--saving">
              *Ahorras $129 comparado el plan mensual.
            </p>
            <button className="plan-card--ca">
              Escoger este <span></span>
            </button>
          </div>
        </div>
        <div className="plans-container--card">
          <p className="recommended">Recomendado</p>
          <div className="plan-card">
            <h3 className="plan-card--title">Pago Anual</h3>
            <p className="plan-card--price">
              <span>$</span> 99
            </p>
            <p className="plan-card--saving">
              *Ahorras $129 comparado el plan mensual.
            </p>
            <button className="plan-card--ca">
              Escoger este <span></span>
            </button>
          </div>
        </div>
        <div className="plans-container--card">
          <div className="plan-card">
            <h3 className="plan-card--title">Pago Anual</h3>
            <p className="plan-card--price">
              <span>$</span> 99
            </p>
            <p className="plan-card--saving">
              *Ahorras $129 comparado el plan mensual.
            </p>
            <button className="plan-card--ca">
              Escoger este <span></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
