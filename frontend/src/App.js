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

      </Routes>
    </BrowserRouter>
      </AuthProvider>
  );

}

export default App;
