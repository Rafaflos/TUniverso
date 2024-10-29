import React, { useState } from "react";
import "../Estilos/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isFirstComponentOpen, setIsFirstComponentOpen] = useState(false);
  const [isSecondComponentOpen, setIsSecondComponentOpen] = useState(false);

  const toggleFirstComponent = () => {
    setIsFirstComponentOpen(!isFirstComponentOpen);
  };

  const toggleSecondComponent = () => {
    setIsSecondComponentOpen(!isSecondComponentOpen);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu1">
        <li className="sidebar-item">
          <div className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
        </li>
        {/*---------------------------------------------------------*/}
        <div className="sidebar-divider"></div>
        <p className="sidebar-heading">INTERFACE</p>
        <li className="sidebar-item">
          <div className="sidebar-link" onClick={toggleFirstComponent}>
            <i className="fas fa-cog"></i>
            <span>Mantenimientos </span>
            <i
              className={`fas fa-chevron-${isFirstComponentOpen ? "up" : "down"}`}
            ></i>
          </div>
          {isFirstComponentOpen && (
            <div className="submenu1">
              <ul>
                <Link to="/administradores" className="submenu-item1">
                  {" "}
                  Administradores{" "}
                </Link>
                <Link to="/conductores" className="submenu-item1">
                  Conductores
                </Link>
                <Link to="/usuarios" className="submenu-item1">
                  Usuarios
                </Link>
                <Link to="/rutas" className="submenu-item1">
                  Rutas
                </Link>
                <Link to="/buses" className="submenu-item1">
                  Buses
                </Link>
                <Link to="/empleados" className="submenu-item1">
                  Empleados
                </Link>
                <Link to="/papeletas" className="submenu-item1">
                  Papeletas
                </Link>
                <Link to="/reporte" className="submenu-item1">
                  Reporte Ventas
                </Link>
                <Link to="/sucursales" className="submenu-item1">
                  Sucursales
                </Link>
              </ul>
            </div>
          )}
        </li>

        {/*--------------------------------------------------------------------*/}
        <div className="sidebar-divider"></div>
        <p className="sidebar-heading">Wb</p>
        <li className="sidebar-item">
          <div className="sidebar-link" onClick={toggleSecondComponent}>
            <i className="fas fa-cog"></i>
            <span>Home</span>
            <i
              className={`fas fa-chevron-${isSecondComponentOpen ? "up" : "down"}`}
            ></i>
          </div>
          {isSecondComponentOpen && (
            <div className="submenu1">
              <ul>
                <Link to="/home" className="submenu-item1">
                  home
                </Link>
              </ul>
            </div>
          )}
        </li>

        {/* ---------------------------------------------------------------------------- */}
      </ul>
    </div>
  );
}

export default Sidebar;
