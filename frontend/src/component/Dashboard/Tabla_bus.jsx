import React from "react";

const Tabla_bus = ({ data = [], onDelete, onEdit }) => {
    return (
        <div>
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Placa</th>
                    <th>Modelo</th>
                    <th>Capacidad</th>
                    <th>Año</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {data.map((bus) => (
                    <tr key={bus.busId}>
                        <td>{bus.busId}</td>
                        <td>{bus.placa}</td>
                        <td>{bus.modelo}</td>
                        <td>{bus.capacidad}</td>
                        <td>{bus.año}</td>
                        <td>{bus.estado}</td>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => onEdit(bus)}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Editar
                            </button>
                            <button className="btn btn-secondary" onClick={() => onDelete(bus.busId)}>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla_bus;
