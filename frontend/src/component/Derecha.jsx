import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Derecha = () => {
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
                }
            );
    };

    return (
        <>

            <main>
                <div className="contenedor__todo1">
                    <div className="caja__trasera1">
                        <div className="caja__trasera-login1">
                            <h3>¿Ya eres miembro?</h3>
                            <p>Inicia sesión hacer tus pedidos</p>
                            <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                        </div>
                        <div className="caja__trasera-register1">
                            <h3> Formulario para empresas</h3>
                            <p>Contáctanos para más información</p>
                        </div>
                    </div>

                    {/* Formulario de Login y registro */}
                    <div className="contenedor__login-register1">
                        <form ref={form} onSubmit={sendEmail} className="formulario__login1">
                            <h2>Soy Pasajero</h2>
                            <input type="text" name="asunto" placeholder="Asunto"/>
                            <input type="text" name="nombre" placeholder="Nombre y Apellidos"/>
                            <input type="text" name="telefonol" placeholder="Teléfono"/>
                            <input type="email" name="email" placeholder="Correo Electrónico"/>
                            <textarea name="message" placeholder="Mensaje"/>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Derecha;
