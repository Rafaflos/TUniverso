import React, { useState, useEffect } from 'react';


import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import Tabla_rutas from "./Tabla_rutas";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";

function Rutas() {
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [precio, setPrecio] = useState("");
    const [horarioSalida, setHorarioSalida] = useState("");
    const [duracion, setDuracion] = useState("");
    const [rutas, setRutas] = useState([]);
    const [editingRuta, setEditingRuta] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3006/api/rutas");
            setRutas(response.data);
        } catch (error) {
            console.error("Error al obtener rutas:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const token = localStorage.getItem("token"); // O la forma en que guardas el token

    const handleSave = async () => {
        const nuevaRuta = {
            origen,
            destino,
            precio: parseFloat(precio),
            horarioSalida: `${horarioSalida}:00`,
            duracion: `${duracion}:00`
        };

        try {
            await axios.post("http://localhost:3006/api/rutas", nuevaRuta, {
                headers: {
                    Authorization: `Bearer ${token}` // Incluye el token en el encabezado
                }
            });
            fetchData();
            handleCloseModal();
        } catch (error) {
            console.error("Error al guardar la ruta:", error);
        }
    };




    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/api/rutas/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error al eliminar la ruta:", error);
        }
    };

    const handleEdit = (ruta) => {
        setEditingRuta(ruta); // Establece la ruta en edición
        setOrigen(ruta.origen);
        setDestino(ruta.destino);
        setPrecio(ruta.precio);
        setHorarioSalida(ruta.horarioSalida);
        setDuracion(ruta.duracion);
    };

    const handleUpdate = async () => {
        if (!editingRuta) return;

        const updatedRuta = {
            origen: origen,
            destino: destino,
            precio: precio,
            horarioSalida: horarioSalida,
            duracion: duracion
        };

        try {
            await axios.put(`http://localhost:3006/api/rutas/${editingRuta.rutaId}`, updatedRuta);
            fetchData();
            handleCloseModal();
        } catch (error) {
            console.error("Error al actualizar la ruta:", error);
        }
    };

    const handleCloseModal = () => {
        setEditingRuta(null); // Restablece la ruta en edición
        setOrigen("");
        setDestino("");
        setPrecio("");
        setHorarioSalida("");
        setDuracion("");
    };

    const nuevaRuta = {
        origen,
        destino,
        precio: parseFloat(precio),
        horarioSalida: `${horarioSalida}:00`,  // Agrega segundos para cumplir el formato
        duracion: `${duracion}:00`
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flexGrow: 1 }}>
                    <Topbar />
                    <div style={{ paddingTop: "50px", margin: "15px", paddingLeft:"270px" }}>
                        <h1>Contenido de Rutas</h1>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Agregar
                        </button>

                        {/* Modal para agregar o editar ruta */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            {editingRuta ? "Editar Ruta" : "Agregar Nueva Ruta"}
                                        </h5>
                                        <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="origen" className="form-label">Origen</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="origen"
                                                    value={origen}
                                                    onChange={(e) => setOrigen(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="destino" className="form-label">Destino</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="destino"
                                                    value={destino}
                                                    onChange={(e) => setDestino(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="precio" className="form-label">Precio</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="precio"
                                                    value={precio}
                                                    onChange={(e) => setPrecio(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="horarioSalida" className="form-label">Horario de Salida</label>
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    id="horarioSalida"
                                                    value={horarioSalida}
                                                    onChange={(e) => setHorarioSalida(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="duracion" className="form-label">Duración</label>
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    id="duracion"
                                                    value={duracion}
                                                    onChange={(e) => setDuracion(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                                        <button type="button" className="btn btn-primary"
                                                onClick={editingRuta ? handleUpdate : handleSave}>
                                            {editingRuta ? "Actualizar" : "Guardar"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabla de Rutas */}
                        <Tabla_rutas data={rutas} onDelete={handleDelete} onEdit={handleEdit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rutas;
