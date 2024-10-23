import React, { useEffect, useState } from "react";
import axios from "axios";

const UsuariosTable = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); // Obtén el token de donde lo estés almacenando

    axios
      .get("http://localhost:8083/api/usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {})
      .catch((error) => {
        console.error("Hubo un error al obtener los usuarios", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Tipo de Usuario</th>
            <th>Fecha de Registro</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.usuarioId}>
              <td>{usuario.usuarioId}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.tipoUsuario}</td>
              <td>{usuario.fechaRegistro}</td>
              <td>{usuario.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTable;
