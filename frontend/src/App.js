import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/Conf/AuthContext";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Services from "./component/Pages/Services";
import Contac from "./component/Pages/Contac";
import Compra from "./component/Pages/Compra";

import Commission from "./component/Pages/Commission";
import Viaje from "./component/Pages/Viaje";
import Preguntas from "./component/Pages/Preguntas";
import Equipaje from "./component/Pages/Equipaje";

import Login from "./component/auth/Login";
import Registration from "./component/auth/Registration";

import ScrollToTop from "./component/Conf/ScrollToTop";
import Dashboard from "./component/Pages/Dashboard";
import Administrador from "./component/Dashboard/Administrador";
import Conductores from "./component/Dashboard/Conductores";
import Usuarios from "./component/Dashboard/Usuarios";
import Rutas from "./component/Dashboard/Rutas";
import Buses from "./component/Dashboard/Buses";
import Empleados from "./component/Dashboard/Empleados";
import Papeletas from "./component/Dashboard/Papeletas";
import Reporte_ventas from "./component/Dashboard/Reporte_ventas";

function Sucursales() {
  return null;
}

function App() {
  return (
      <AuthProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contac />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/viaje" element={<Viaje />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/equipaje" element={<Equipaje />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/administradores" element={<Administrador />} />
        <Route path="/conductores" element={<Conductores />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/rutas" element={<Rutas />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/papeletas" element={<Papeletas />} />
        <Route path="/reporte" element={<Reporte_ventas />} />
        <Route path="/sucursales" element={<Sucursales />} />



      </Routes>
    </BrowserRouter>
      </AuthProvider>
  );

}

export default App;
