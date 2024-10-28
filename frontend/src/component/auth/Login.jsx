import React, { useState } from 'react';
import "../Estilos/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        try {
            const response = await axios.post("http://localhost:3001/api/auth/login", {
                usuario: usuario,
                contraseña: contraseña
            });

            console.log("Login exitoso:", response.data);
            localStorage.setItem('token', response.data.token); // Guardar el token en el almacenamiento local
            localStorage.setItem('username', usuario); // Guardar el nombre de usuario

            setMessage({ text: "Inicio de sesión exitoso", type: "success" });

            setTimeout(() => {
                navigate('/home'); // Redirigir al usuario después de unos segundos al dashboard
            }, 5000);

        } catch (error) {
            if (error.response) {
                console.error("Error en la solicitud:", error.response.data);
                setMessage({ text: "Error: Usuario o contraseña incorrectos", type: "error" });
            } else {
                console.error("Error:", error.message);
                setMessage({ text: "Error en la conexión al servidor", type: "error" });
            }
        }
    };

    return (
        <div className="container">
            <div className="contenedor-principal">
                <div className="contenedor-izquierda">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="formulario">
                        <input
                            type="text"
                            placeholder="Usuario"
                            className="input-usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="input-contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-ingresar">Ingresar</button>
                        {message && (
                            <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
                                {message.text}
                            </div>
                        )}
                    </form>
                </div>

                <div className="contenedor-derecha">
                    <div className="registro">
                        <h3>¿Todavía no tienes una cuenta?</h3>
                        <h3>¡Regístrate aquí!</h3>
                        <Link to="/register">Registrarse</Link>
                    </div>
                    <div className="imagen">
                        <img src="/Img/Signip.png" alt="Imagen de un bus" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
