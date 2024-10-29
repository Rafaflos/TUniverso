import React from "react";
import Topbar from "../common/Topbar";
import Sidebar from "../common/Sidebar";
import Tabl3 from "./Tabl3";

function Administrador() {
  return (
      <>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <Topbar />
            <div style={{ paddingTop: "70px", margin:"10px" }}>
              <h1>Contenido de Administradores</h1>
              <p>
                Este es un ejemplo de cómo se ve el contenido debajo del Topbar.
              </p>
              <Tabl3 />
            </div>
          </div>
        </div>
      </>
  );
}

export default Administrador;
