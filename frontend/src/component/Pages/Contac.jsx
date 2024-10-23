import React, { useEffect, useRef, useState } from "react";
import Navbar from "../NavBar";
import Footer from "../common/Footer";
import "../Estilos/Contac.css";

import emailjs from "@emailjs/browser";

const LoginRegister = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_8uvcm1g", "template_j49849c", form.current, {
        publicKey: "z-g7EbcXYglLWNA5e",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="contenedor__todo">
          <div className="caja__trasera">
            <div className="caja__trasera-login">
              <h3>¿Ya eres miembro?</h3>
              <p>Inicia sesión hacer tus pedidos</p>
              <button id="btn__iniciar-sesion">Iniciar Sesión</button>
            </div>
            <div className="caja__trasera-register">
              <h3>ACCESO DE MIEMBROS</h3>
              <p>Contactanos para mas informacion</p>
              <button id="btn__registrarse">Contactanos</button>
            </div>
          </div>

          {/*// <!--Formulario de Login y registro-->*/}
          <div className="contenedor__login-register">
            {/*// <!--Login-->*/}
            <form ref={form} onSubmit={sendEmail} className="formulario__login">
              <h2>Soy Pasajero</h2>
              <input type="text" name="asunto" placeholder="Asunto" />
              <input
                type="text"
                name="nombre"
                placeholder="Nombre y Apellidos"
              />
              <input type="text" name="telefono" placeholder="Telefono" />
              <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
              />
              <textarea name="message" placeholder="Mensaje" />
              <button type="submit">Enviar</button>
            </form>

            {/*// <!--Register-->*/}
            <form action="" className="formulario__register" method="post">
              <h2>Contactanos</h2>
              <input type="text" placeholder="Nombre completo" />
              <input type="text" placeholder="Correo Electronico" />
              <input type="text" placeholder="Ruc" />
              <input type="text" placeholder="Asunto" />

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginRegister;
