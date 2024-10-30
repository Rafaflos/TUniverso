package com.api.TUniverso.dao;

import com.api.TUniverso.Model.Usuario;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UsuarioDAO {
    private static final String URL = "jdbc:mysql://localhost:3306/turismo_universo";
    private static final String USER = "root";
    private static final String PASSWORD = "root";

    // Método para registrar un usuario en la base de datos
    public boolean registrarUsuario(Usuario usuario) {
        String sql = "INSERT INTO usuarios (nombre, email, contraseña, tipo_usuario, estado, usuario) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, usuario.getNombre());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getContraseña());
            stmt.setString(4, "cliente");
            stmt.setString(5, "activo");
            stmt.setString(6, usuario.getUsuario());

            int rowsInserted = stmt.executeUpdate();
            return rowsInserted > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // Método para obtener un usuario por nombre de usuario
    public Usuario obtenerPorUsuario(String nombreUsuario) {
        String sql = "SELECT * FROM usuarios WHERE usuario = ?";
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, nombreUsuario);

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return new Usuario(
                            rs.getInt("usuario_id"),
                            rs.getString("nombre"),
                            rs.getString("email"),
                            rs.getString("contraseña"),
                            rs.getString("tipo_usuario"),
                            rs.getString("estado"),
                            rs.getString("usuario")
                    );
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    // Obtener todos los usuarios
    public List<Usuario> obtenerTodosLosUsuarios() {
        List<Usuario> usuarios = new ArrayList<>();
        String sql = "SELECT * FROM usuarios";
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Usuario usuario = new Usuario(
                        rs.getInt("usuario_id"),
                        rs.getString("nombre"),
                        rs.getString("email"),
                        rs.getString("contraseña"),
                        rs.getString("tipo_usuario"),
                        rs.getString("estado"),
                        rs.getString("usuario")
                );
                usuarios.add(usuario);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return usuarios;
    }

    // Obtener usuario por ID
    public Optional<Usuario> obtenerUsuarioPorId(Long id) {
        String sql = "SELECT * FROM usuarios WHERE usuario_id = ?";
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setLong(1, id); // Cambia a setLong
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    Usuario usuario = new Usuario(
                            rs.getLong("usuario_id"), // Cambia a getLong
                            rs.getString("nombre"),
                            rs.getString("email"),
                            rs.getString("contraseña"),
                            rs.getString("tipo_usuario"),
                            rs.getString("estado"),
                            rs.getString("usuario")
                    );
                    return Optional.of(usuario);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }


    // Método para actualizar un usuario existente
    public boolean actualizarUsuario(Usuario usuario) {
        String sql = "UPDATE usuarios SET nombre = ?, email = ?, contraseña = ?, tipo_usuario = ?, estado = ?, usuario = ? WHERE usuario_id = ?";
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, usuario.getNombre());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getContraseña());
            stmt.setString(4, usuario.getTipo_usuario());
            stmt.setString(5, usuario.getEstado());
            stmt.setString(6, usuario.getUsuario());
            stmt.setLong(7, usuario.getUsuario_id());

            int rowsUpdated = stmt.executeUpdate();
            return rowsUpdated > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // Eliminar usuario por ID
    public boolean eliminarUsuario(Long id) {
        String sql = "DELETE FROM usuarios WHERE usuario_id = ?";
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setLong(1, id);
            int rowsDeleted = stmt.executeUpdate();
            return rowsDeleted > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}
