import React, { useState, useEffect } from 'react';
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import Tabla_cod from "./Tabla_cod";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";

function Conductores() {
    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [licencia, setLicencia] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaContratacion, setFechaContratacion] = useState("");
    const [estado, setEstado] = useState("ACTIVO");
    const [conductores, setConductores] = useState([]);
    const [editingConductor, setEditingConductor] = useState(null);

    const fetchData = async () => {
        const token = localStorage.getItem("token");
        console.log("Token:", token); // Para verificar si el token está disponible
        try {
            const response = await axios.get("http://localhost:3006/api/conductores", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setConductores(response.data);
        } catch (error) {
            console.error("Error al obtener conductores:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async () => {
        const nuevoConductor = {
            nombre,
            dni,
            licencia,
            telefono,
            fechaContratacion,
            estado
        };

        try {
            await axios.post("http://localhost:3006/api/conductores", nuevoConductor, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            fetchData();
            handleCloseModal();
        } catch (error) {
            console.error("Error al guardar el conductor:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/api/conductores/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            fetchData();
        } catch (error) {
            console.error("Error al eliminar el conductor:", error);
        }
    };

    const handleEdit = (conductor) => {
        setEditingConductor(conductor);
        setNombre(conductor.nombre);
        setDni(conductor.dni);
        setLicencia(conductor.licencia);
        setTelefono(conductor.telefono);
        setFechaContratacion(conductor.fechaContratacion);
        setEstado(conductor.estado);
    };

    const handleUpdate = async () => {
        if (!editingConductor) return;

        const updatedConductor = {
            nombre,
            dni,
            licencia,
            telefono,
            fechaContratacion,
            estado
        };

        try {
            await axios.put(`http://localhost:3006/api/conductores/${editingConductor.conductorId}`, updatedConductor);
            fetchData();
            handleCloseModal();
        } catch (error) {
            console.error("Error al actualizar el conductor:", error);
        }
    };

    const handleCloseModal = () => {
        setEditingConductor(null);
        setNombre("");
        setDni("");
        setLicencia("");
        setTelefono("");
        setFechaContratacion("");
        setEstado("ACTIVO");
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flexGrow: 1 }}>
                    <Topbar />
                    <div style={{ paddingTop: "50px", margin: "15px", paddingLeft:"270px" }}>
                        <h1>Gestión de Conductores</h1>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Agregar Conductor
                        </button>

                        {/* Modal para agregar o editar conductor */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            {editingConductor ? "Editar Conductor" : "Agregar Nuevo Conductor"}
                                        </h5>
                                        <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombre"
                                                    value={nombre}
                                                    onChange={(e) => setNombre(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="dni" className="form-label">DNI</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="dni"
                                                    value={dni}
                                                    onChange={(e) => setDni(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="licencia" className="form-label">Licencia</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="licencia"
                                                    value={licencia}
                                                    onChange={(e) => setLicencia(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="telefono"
                                                    value={telefono}
                                                    onChange={(e) => setTelefono(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="fechaContratacion" className="form-label">Fecha de Contratación</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="fechaContratacion"
                                                    value={fechaContratacion}
                                                    onChange={(e) => setFechaContratacion(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="estado" className="form-label">Estado</label>
                                                <select
                                                    className="form-select"
                                                    id="estado"
                                                    value={estado}
                                                    onChange={(e) => setEstado(e.target.value)}
                                                >
                                                    <option value="ACTIVO">Activo</option>
                                                    <option value="INACTIVO">Inactivo</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                                        <button type="button" className="btn btn-primary"
                                                onClick={editingConductor ? handleUpdate : handleSave}>
                                            {editingConductor ? "Actualizar" : "Guardar"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabla de Conductores */}
                        <Tabla_cod data={conductores} onDelete={handleDelete} onEdit={handleEdit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Conductores;
