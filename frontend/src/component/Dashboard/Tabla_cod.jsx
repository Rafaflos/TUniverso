import React from "react";

const Tabla_cod  = ({ data = [], onDelete, onEdit }) => {
  return (
      <div>
        <table className="table table-striped custom-table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Licencia</th>
            <th>Teléfono</th>
            <th>Fecha de Contratación</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          {data.map((conductor) => (
              <tr key={conductor.conductorId}>
                <td>{conductor.conductorId}</td>
                <td>{conductor.nombre}</td>
                <td>{conductor.dni}</td>
                <td>{conductor.licencia}</td>
                <td>{conductor.telefono}</td>
                <td>{new Date(conductor.fechaContratacion).toLocaleDateString()}</td>
                <td>{conductor.estado}</td>
                <td>
                  <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => onEdit(conductor)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                  >
                    Editar
                  </button>
                  <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(conductor.conductorId)}
                  >
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

export default Tabla_cod;
