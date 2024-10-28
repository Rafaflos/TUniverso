import React, { useEffect, useState } from "react";
import axios from "axios";

const UsuariosTable = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/auth/usuarios", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        setError("Error al cargar los usuarios: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Mensaje de carga
  }

  if (error) {
    return <div>{error}</div>; // Mensaje de error
  }

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
            <th>Estado</th>
          </tr>
          </thead>
          <tbody>
          {usuarios.map((usuario) => (
              <tr key={usuario.usuario_id}>
                <td>{usuario.usuario_id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.tipo_usuario}</td>
                <td>{usuario.estado}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default UsuariosTable;
