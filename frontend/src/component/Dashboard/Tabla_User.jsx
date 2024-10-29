import React from "react";

const Tabla_User = ({ data = [], onDelete, onEdit }) => {
    return (
        <div>
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Contraseña</th>
                    <th>Tipo de usuario</th>
                    <th>Fecha de registro</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {data.map((user) => (
                    <tr key={user.usuario_id}>
                        <td>{user.usuario_id}</td>
                        <td>{user.nombre}</td>
                        <td>{user.email}</td>
                        <td>{user.contraseña}</td>
                        <td>{user.tipo_usuario}</td>
                        <td>{new Date(user.fecha_registro).toLocaleDateString()}</td>
                        <td>{user.estado}</td>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => onEdit(user)}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Edit
                            </button>
                            <button className="btn btn-secondary" onClick={() => onDelete(user.usuario_id)}>
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

export default Tabla_User;
