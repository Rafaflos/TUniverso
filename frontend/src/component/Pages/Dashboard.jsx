import React from "react";
import Tabl3 from "../Dashboard/Tabl3";
import Sidebar_user from "../common/Sidebar_user";
import Topbar_user from "../common/Topbar_user";



function Dashboard() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar_user />
        <div style={{ flexGrow: 1 }}>
          <Topbar_user />
          <div style={{ paddingTop: "70px", margin:"10px" , paddingLeft:"270px" }}>
            <h1>Mis viajes</h1>
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
//ya me hasta las 4 o 5 me quito xd/me pasa lo ultimo de cual

export default Dashboard;
