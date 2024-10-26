import React from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import Tabl3 from "./Tabl3";
import Tabla_cod from "./Tabla_cod";

function Conductores() {
  return (
    <div>
      <Sidebar />

      <Topbar />
      <div style={{ paddingTop: "100px", paddingLeft: "270px" }}>
        <h1>Contenido de la Conductores</h1>
        <p>Este es un ejemplo de cómo se ve el contenido debajo del Topbar.</p>
        <Tabla_cod />
      </div>
    </div>
  );
}

export default Conductores;
