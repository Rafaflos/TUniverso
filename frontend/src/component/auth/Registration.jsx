import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/Style2.css';

function Registration() {
    return (
        <div className="contenedor-principal">

            <div className="contenedor-izquierda">
                <div className="registro">
                    <h3>¡Ya estas con nosotros!</h3>
                    <h3>Has click aqui para iniciar sesion</h3>
                    <h3>y segir explorando</h3>
                    <a href="login.html" className="btn-registrar">Iniciar sesión</a>
                </div>
                <div className="imagen">
                    <img src="Img/Signup.png" alt="Imagen de personas viajando"/>
                </div>
            </div>

            <div className="contenedor-derecha">
                <h2>Iniciar Sesión</h2>
                <div className="formulario">
                    <input type="text" placeholder="Usuario" className="input-usuario"/>
                    <input type="text" placeholder="Correo Electrónico"/>
                    <input type="text" placeholder="Teléfono"/>
                    <input type="password" placeholder="Contraseña" className="input-contraseña"/>
                    <button className="btn-ingresar">Registrar</button>
                </div>
            </div>

        </div>
    )
}

export default Registration;