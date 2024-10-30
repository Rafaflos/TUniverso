import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Estilos/Register.css';

function Registration() {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/api/auth/register', { // Ajusta el puerto según sea necesario
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usuario,
                email,
                contraseña
            })
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(err => {
                        throw new Error(err || 'Error en la solicitud');
                    });
                }
                return response.text();  // Cambiado para manejar respuesta como texto
            })
            .then(data => {
                console.log('Success:', data);
                setSuccess('Usuario registrado exitosamente');
                setTimeout(() => navigate('/login'), 2000); // Redirige al login
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                setError(error.message || 'Error al registrar');
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
                        required
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        className="input-contraseña"
                        required
                    />
                    <button type="submit" className="btn-ingresar">Registrar</button>
                    {error && <div style={{ color: "red" }}>{error}</div>}
                    {success && <div style={{ color: "green" }}>{success}</div>}
                </form>
                <Link to="/home"> Inicio </Link>
            </div>
        </div>
    );
}

export default Registration;
