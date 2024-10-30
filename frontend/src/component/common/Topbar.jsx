import React, {useState} from "react";
import "../Estilos/Topbar.css";
import {useNavigate} from "react-router-dom";

function Topbar() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(localStorage.getItem("username") || "");
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUsername(""); // Actualiza el estado para ocultar el nombre
        navigate("/login");
    };
    return (
    <div className="topbar">
        <div className="user-info">
            <h3>Bienvenido {username}</h3>
            <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
        </div>

    </div>
    );
}

export default Topbar;
