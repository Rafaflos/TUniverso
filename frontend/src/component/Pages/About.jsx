import React from "react";
import Navbar from "../NavBar";
import Footer from "../common/Footer";
import UsuariosTable from "../UsuariosTable";
import "../Estilos/About.css";

function About() {
  return (
    <>
      <Navbar />
      <section className="sobre_nosobros">
        <div className="header">
          <img src="../img/cargas.png" alt="Movil Bus" className="bus-image" />
          <div className="header-text">
            <h1>NOSOTROS</h1>
            <p>
              Somos lo que somos <strong>porque nunca paramos</strong>.
            </p>
            <p>
              nuestras primeras combisNo paramos hasta que conseguimos nuestras
              primeras combis combis nuestras primeras combisNo paramos hasta
              que conseguimos nuestras primeras combis combis nuestras primeras
              combisNo paramos hasta que conseguimos nuestras primeras combis
              combis nuestras primeras combisNo paramos hasta que conseguimos
              nuestras primeras combis combis
            </p>
          </div>
        </div>
        <div className="content">
          <div className="mission">
            <h2>Misión</h2>
            <p>
              Brindar soluciones integrales y eficientes en transporte,
              orientadas a la satisfacción del cliente.
            </p>
          </div>
          <div className="vision">
            <h2>Visión</h2>
            <p>
              Ser la empresa de transporte líder a nivel nacional, comprometida
              con el desarrollo del Perú en conjunto con nuestros colaboradores,
              clientes y socios estratégicos; trabajando en armonía con el medio
              ambiente.
            </p>
          </div>
        </div>
        <div className="valores-institucionales">
          <h2>Valores institucionales</h2>
          <div className="valores-icons">
            <div className="valor">
              <img src="../img/2617930.png" />
              <p>Excelencia en el servicio</p>
            </div>
            <div className="valor">
              <img src="../img/trabajo.png" />
              <p>Trabajo en equipo</p>
            </div>
            <div className="valor">
              <img src="../img/integridad.png" />
              <p>Integridad</p>
            </div>
            <div className="valor">
              <img src="../img/seguridad.png" />
              <p>Seguridad Integral</p>
            </div>
            <div className="valor">
              <img src="../img/innovacion.png" />
              <p>Innovación</p>
            </div>
          </div>
        </div>
      </section>
      <UsuariosTable />
      <Footer />
    </>
  );
}

export default About;
