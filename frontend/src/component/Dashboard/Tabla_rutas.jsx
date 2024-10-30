import React from "react";

const Tabla_rutas = ({ data = [], onDelete, onEdit }) => {
    return (
        <div>
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Precio</th>
                    <th>Horario de Salida</th>
                    <th>Duración</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {data.map((ruta) => (
                    <tr key={ruta.rutaId}>
                        <td>{ruta.rutaId}</td>
                        <td>{ruta.origen}</td>
                        <td>{ruta.destino}</td>
                        <td>{ruta.precio}</td>
                        <td>{ruta.horarioSalida}</td>
                        <td>{ruta.duracion}</td>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => onEdit(ruta)}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Edit
                            </button>
                            <button className="btn btn-secondary" onClick={() => onDelete(ruta.rutaId)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla_rutas;
