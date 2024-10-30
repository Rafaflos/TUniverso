import React from "react";
import Dashboard from "../Pages/Dashboard";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import Tabl3 from "./Tabl3";

function Reporte_ventas() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flexGrow: 1 }}>
                    <Topbar />
                    <div style={{ paddingTop: "70px", margin:"10px" , paddingLeft:"270px"}}>
                        <h1>Contenido de Reporte ventas</h1>
                        <p>
                            Este es un ejemplo de cómo se ve el contenido debajo del Topbar.
                        </p>
                        <Tabl3 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reporte_ventas;