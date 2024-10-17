import React from 'react';
import "../Estilos/Login.css"
import { Link } from 'react-router-dom';

function Login(){
    return (
        <>
        <div className="container">
        <div className="contenedor-principal">
            <div className="contenedor-izquierda">
                <h2>Iniciar Sesión</h2>
                <div className="formulario">
                    <input type="text" placeholder="Usuario" className="input-usuario"/>
                    <input type="password" placeholder="Contraseña" className="input-contraseña"/>
                    <button className="btn-ingresar">Ingresar</button>
                </div>
            </div>

            <div className="contenedor-derecha">
                <div className="registro">
                    <h3>¿Todavía no tienes una cuenta?</h3>
                    <h3>¡Regístrate aquí!</h3>
                    <Link to="/register">Registrarse</Link>
                </div>
                <div className="imagen">
                    <img src="/Img/Signip.png" alt="Imagen de un bus"/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Login;