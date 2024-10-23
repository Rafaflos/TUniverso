import React from "react";
import Navbar from "../NavBar";
import Footer from "../common/Footer";
import Accordion from "../Accordion";

import styled from "styled-components";
import "../Estilos/Preguntas.css";
import "../Estilos/Accordion.css";

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-top: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

function Preguntas() {
  return (
    <>
      <Navbar />
      <StyledH1> Preguntas Frecuentes</StyledH1>
      <Accordion />
      <Footer />
    </>
  );
}

export default Preguntas;
