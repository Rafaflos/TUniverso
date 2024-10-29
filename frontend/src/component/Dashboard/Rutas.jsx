import React from "react";
import Tabla_rutas from "./Tabla_rutas";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";


function Rutas() {
    return (
        <>
            <div style={{display: "flex"}}>
                <Sidebar/>
                <div style={{flexGrow: 1}}>
                    <Topbar/>
                    <div style={{paddingTop: "70px", margin: "10px", paddingLeft:"270px"  }}>
                        <h1>Contenido de Rutas</h1>
                        <p>
                            Este es un ejemplo de cómo se ve el contenido debajo del Topbar.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Rutas;