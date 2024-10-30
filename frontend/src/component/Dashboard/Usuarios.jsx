import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import Tabla_User from "./Tabla_User";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from "axios";

function Usuarios() {

    const [usuario, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [tipoUsuario, setTipo_usuario] = useState("admin");
    const [usuarios, setUsuarios] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3005/api/usuarios");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async () => {
        const nuevoUsuario = {
            usuario: usuario,
            email: email,
            contraseña: contraseña,
            tipo_usuario: tipoUsuario
        };

        try {
            await axios.post("http://localhost:3005/api/usuarios/register", nuevoUsuario);
            fetchData();
            handleCloseModal(); // Limpia el formulario y cierra el modal
        } catch (error) {
            console.error("Error al guardar el usuario:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3005/api/usuarios/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setNombre(user.nombre);
        setEmail(user.email);
        setContraseña(user.contraseña);
        setTipo_usuario(user.tipo_usuario);
    };

    const handleUpdate = async () => {
        if (!editingUser) return;

        const updatedUser = {
            usuario: editingUser.usuario, // Incluye el valor de 'usuario' aquí
            nombre: usuario,
            email: email,
            contraseña: contraseña,
            tipo_usuario: tipoUsuario
        };

        try {
            await axios.put(`http://localhost:3005/api/usuarios/${editingUser.usuario_id}`, updatedUser);
            fetchData();
            handleCloseModal(); // Limpia el formulario y cierra el modal
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    };


    const handleCloseModal = () => {
        setEditingUser(null);
        setNombre("");
        setEmail("");
        setContraseña("");
        setTipo_usuario("admin");
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flexGrow: 1 }}>
                    <Topbar />
                    <div style={{ paddingTop: "50px", margin: "15px", paddingLeft:"270px" }}>
                        <h1>Contenido de Usuario</h1>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Agregar
                        </button>

                        {/* Modal para agregar o editar usuario */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            {editingUser ? "Editar Usuario" : "Agregar Nuevo Usuario"}
                                        </h5>
                                        <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="usuario" className="form-label">Nombre de Usuario</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="usuario"
                                                    value={usuario}
                                                    onChange={(e) => setNombre(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Contraseña</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    value={contraseña}
                                                    onChange={(e) => setContraseña(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="tipoUsuario" className="form-label">Rol</label>
                                                <select
                                                    className="form-select"
                                                    id="tipoUsuario"
                                                    value={tipoUsuario}
                                                    onChange={(e) => setTipo_usuario(e.target.value)}
                                                >
                                                    <option value="admin">Administrador</option>
                                                    <option value="user">Usuario</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                                        <button type="button" className="btn btn-primary"
                                                onClick={editingUser ? handleUpdate : handleSave}>
                                            {editingUser ? "Actualizar" : "Guardar"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabla de Usuarios */}
                        <Tabla_User data={usuarios} onDelete={handleDelete} onEdit={handleEdit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Usuarios;
