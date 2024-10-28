import React, { useState } from "react";
import Navbar from "../NavBar";
import Footer from "../common/Footer";

import "../Estilos/commision.css";

function Cotizacion() {
  // Definir los estados para el formulario
  const [departamentoOrigen, setDepartamentoOrigen] = useState("Lima");
  const [provinciaOrigen, setProvinciaOrigen] = useState("Huaral");
  const [distritoOrigen, setDistritoOrigen] = useState("Huaral");
  const [departamentoDestino, setDepartamentoDestino] = useState("Lima");
  const [provinciaDestino, setProvinciaDestino] = useState("Lima");
  const [distritoDestino, setDistritoDestino] = useState("Miraflores");
  const [peso, setPeso] = useState("kg");
  const [ancho, setAncho] = useState();
  const [largo, setLargo] = useState();
  const [alto, setAlto] = useState();
  const [tipoEnvio, setTipoEnvio] = useState("paquete");
  const [precioEstimado, setPrecioEstimado] = useState(0);

  // Función para calcular el precio estimado
  const calcularPrecio = () => {
    // Aquí puedes colocar la lógica del cálculo, por ejemplo:
    const basePrecio = 30;
    const pesoFactor = peso * 2; // Suma por peso
    const volumenFactor = (ancho * largo * alto) / 5000; // Factor volumétrico
    const precioFinal = basePrecio + pesoFactor + volumenFactor;
    setPrecioEstimado(precioFinal.toFixed(2));
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="cotizacion-container">
        <h2>Cotiza tu encomienda</h2>

        <div className="form-group">
          <div className="group1">
            <label>¿Dónde te encuentras?</label>
            <div className="select-group">
              <select
                value={departamentoOrigen}
                onChange={(e) => setDepartamentoOrigen(e.target.value)}
              >
                <option value="Lima">Lima</option>
                {/* Agrega más opciones de departamentos */}
              </select>
              <select
                value={provinciaOrigen}
                onChange={(e) => setProvinciaOrigen(e.target.value)}
              >
                <option value="Huaral">Huaral</option>
                {/* Agrega más opciones de provincias */}
              </select>
              <select
                value={distritoOrigen}
                onChange={(e) => setDistritoOrigen(e.target.value)}
              >
                <option value="Huaral">Huaral</option>
                {/* Agrega más opciones de distritos */}
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="group1">
            <label>¿A dónde lo llevamos?</label>
            <div className="select-group">
              <select
                value={departamentoDestino}
                onChange={(e) => setDepartamentoDestino(e.target.value)}
              >
                <option value="Lima">Lima</option>
              </select>
              <select
                value={provinciaDestino}
                onChange={(e) => setProvinciaDestino(e.target.value)}
              >
                <option value="Lima">Lima</option>
              </select>
              <select
                value={distritoDestino}
                onChange={(e) => setDistritoDestino(e.target.value)}
              >
                <option value="Miraflores">Miraflores</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="group2">
            <label>¿Qué quieres enviar?</label>
            <div className="select-group">
              <label>
                <input
                  type="radio"
                  value="sobre"
                  checked={tipoEnvio === "sobre"}
                  onChange={() => setTipoEnvio("sobre")}
                />
                Sobres
              </label>
              <label>
                <input
                  type="radio"
                  value="paquete"
                  checked={tipoEnvio === "paquete"}
                  onChange={() => setTipoEnvio("paquete")}
                />
                Paquetes
              </label>
            </div>
          </div>
          <div>
            <label>¿Cuánto pesa?</label>
            <input
              type="number"
              placeholder={"Kiligramo (Kg)"}
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="group1">
            <label>¿Cuánto mide?</label>

            <input
              type="number"
              placeholder="Ancho (cm)"
              value={ancho}
              onChange={(e) => setAncho(e.target.value)}
            />
            <input
              type="number"
              placeholder="Largo (cm)"
              value={largo}
              onChange={(e) => setLargo(e.target.value)}
            />
            <input
              type="number"
              placeholder="Alto (cm)"
              value={alto}
              onChange={(e) => setAlto(e.target.value)}
            />
          </div>
        </div>

        <button onClick={calcularPrecio}>Cotizar</button>

        <div className="result">
          <h3>Precio estimado: S/ {precioEstimado}</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cotizacion;
