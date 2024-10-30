import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import Tabla_bus from "./Tabla_bus";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";

function Buses() {
    const [placa, setPlaca] = useState("");
    const [modelo, setModelo] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [año, setAño] = useState("");
    const [estado, setEstado] = useState("ACTIVO");
    const [buses, setBuses] = useState([]);
    const [editingBus, setEditingBus] = useState(null);
    const [conductores, setConductores] = useState([]);

    const token = localStorage.getItem("token");

    const fetchConductores = async () => {
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

    const fetchBuses = async () => {
        try {
            const response = await axios.get("http://localhost:3006/api/buses", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setBuses(response.data);
        } catch (error) {
            console.error("Error al obtener buses:", error);
        }
    };

    useEffect(() => {
        fetchConductores();
        fetchBuses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/api/buses/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchBuses();
        } catch (error) {
            console.error("Error al eliminar el bus:", error);
        }
    };

    const handleEdit = (bus) => {
        setEditingBus(bus);
        setPlaca(bus.placa);
        setModelo(bus.modelo);
        setCapacidad(bus.capacidad);
        setAño(bus.año);
        setEstado(bus.estado);
    };

    const handleUpdate = async () => {
        if (!editingBus) return;

        const updatedBus = {
            placa,
            modelo,
            capacidad: parseInt(capacidad),
            año: parseInt(año),
            estado
        };

        try {
            await axios.put(`http://localhost:3006/api/buses/${editingBus.busId}`, updatedBus, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchBuses();
            handleCloseModal();
        } catch (error) {
            console.error("Error al actualizar el bus:", error);
        }
    };

    const handleCloseModal = () => {
        setEditingBus(null);
        setPlaca("");
        setModelo("");
        setCapacidad("");
        setAño("");
        setEstado("ACTIVO");
    };

    const handleSave = async () => {
        const nuevoBus = {
            placa,
            modelo,
            capacidad: parseInt(capacidad),
            año: parseInt(año),
            estado
        };

        try {
            await axios.post("http://localhost:3006/api/buses", nuevoBus, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchBuses();
            handleCloseModal();
        } catch (error) {
            console.error("Error al guardar el bus:", error);
        }
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flexGrow: 1 }}>
                    <Topbar />
                    <div style={{ paddingTop: "50px", margin: "15px", paddingLeft:"270px" }}>
                        <h1>Contenido de Buses</h1>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Agregar
                        </button>

                        {/* Modal para agregar o editar bus */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            {editingBus ? "Editar Bus" : "Agregar Nuevo Bus"}
                                        </h5>
                                        <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="placa" className="form-label">Placa</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="placa"
                                                    value={placa}
                                                    onChange={(e) => setPlaca(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="modelo" className="form-label">Modelo</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="modelo"
                                                    value={modelo}
                                                    onChange={(e) => setModelo(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="capacidad" className="form-label">Capacidad</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="capacidad"
                                                    value={capacidad}
                                                    onChange={(e) => setCapacidad(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="año" className="form-label">Año</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="año"
                                                    value={año}
                                                    onChange={(e) => setAño(e.target.value)}
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
                                                    <option value="ACTIVO">ACTIVO</option>
                                                    <option value="INACTIVO">INACTIVO</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                                        <button type="button" className="btn btn-primary" onClick={editingBus ? handleUpdate : handleSave}>
                                            {editingBus ? "Actualizar" : "Guardar"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabla de Buses */}
                        <Tabla_bus data={buses} onDelete={handleDelete} onEdit={handleEdit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Buses;
