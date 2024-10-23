import React from "react";
import Navbar from "../NavBar";
import Footer from "../common/Footer";
import Card from "../Card";
import Card_e from "../Card_e";

import "../Estilos/Equipaje.css";
import equipajeImg from "../Img/equipaje.png";

function Equipaje() {
  return (
    <>
      <Navbar />
      <div className="info">
        <h1>Info para tu viaje</h1>
      </div>
      <Card_e />
      <div
        className="container-equipaje"
        style={{ backgroundImage: `url(${equipajeImg})` }}
      >
        <div className="overlay"></div>
        {/* Capa de transparencia */}
        <div className="equipaje-content">
          <h2> Equipaje Permitido </h2>
          <div className="equipaje-items">
            <div className="items1">
              <h3> Equipaje de mano </h3>
              <p>
                Los pasajeros pueden llevar una pieza de equipaje de mano con un
                peso máximo de 8 kg.
              </p>
            </div>
            <div className="items1">
              <h3> Equipaje en bodega </h3>
              <p>Se permite un equipaje de hasta 20 kg en la bodega del bus.</p>
            </div>
            <div className="items1">
              <h3> Exceso de equipaje </h3>
              <p>
                Para equipaje que exceda los 20 kg, se aplicará una tarifa
                adicional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Equipaje;
