import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Estilos/Register.css';

function Registration() {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Tu data aquí
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    };

    return (
        <div className="contenedor-principal">
            <div className="contenedor-izquierda">
                <div className="registro">
                    <h3>¡Ya estás con nosotros!</h3>
                    <h3>Haz clic aquí para iniciar sesión</h3>
                    <h3>y seguir explorando</h3>
                    <Link to="/login" className="btn-registrar">Iniciar sesión</Link>
                </div>
                <div className="imagen">
                    <img src="Img/Signup.png" alt="Imagen de personas viajando" />
                </div>
            </div>

            <div className="contenedor-derecha">
                <h2>Registrar Usuario</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        className="input-usuario"
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        className="input-contraseña"
                    />
                    <button type="submit" className="btn-ingresar">Registrar</button>
                </form>
                <Link to="/home"> Inicio </Link>
            </div>
        </div>
    );
}

export default Registration;
