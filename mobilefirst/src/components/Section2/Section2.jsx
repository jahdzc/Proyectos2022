import React from "react";
import './section2.css'

export const Section2 = () => {
  return (
    <section className="main-product-detail">
      <span className="product-detail--batata-logo"></span>
      <div className="product-detail--title">
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>
      <div className="product-cards--container">
        <article className="product-detail--card">
          <span className="clock"></span>
          <p className="product--card_title">Tiempo real</p>
          <p className="product--card_body">
            Nuestra API toma información minuto a minito sobre las tasas que más
            determinan el comportamiento.
          </p>
        </article>
        <article className="product-detail--card">
          <span className="eye"></span>
          <p className="product--card_title">No hay tasas escondidas</p>
          <p className="product--card_body">
            Ni en la compra o al momento de exit, Batabit siempre te muestra el
            costo real de lo que estás adquiriendo.
          </p>
        </article>
        <article className="product-detail--card">
          <span className="dollar"></span>
          <p className="product--card_title">Compara monedas</p>
          <p className="product--card_body">
            No más rumores, con Batabit sabrás el valor real de casa moneda en
            el mercado actual.
          </p>
        </article>
        <article className="product-detail--card">
          <span className="check"></span>
          <p className="product--card_title">Información confiable</p>
          <p className="product--card_body">
            Nuestras fuentes están 100% verificadas y continuamos auditanmdo su
            contenido miesntras se actualizan.
          </p>
        </article>
      </div>
    </section>
  );
};
