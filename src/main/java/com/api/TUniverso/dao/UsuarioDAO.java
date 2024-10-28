package com.api.TUniverso.dao;

import com.api.TUniverso.Model.Usuario;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UsuarioDAO {
    private static final String URL = "jdbc:mysql://localhost:3306/turismo_universo";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    // Método para registrar un usuario en la base de datos
    public boolean registrarUsuario(Usuario usuario) {
        String sql = "INSERT INTO usuarios (nombre, email, contraseña, tipo_usuario, estado, usuario) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, usuario.getNombre());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getContraseña());
            stmt.setString(4, "cliente"); // tipo_usuario por defecto
            stmt.setString(5, "activo");   // estado por defecto
            stmt.setString(6, usuario.getUsuario());

            int rowsInserted = stmt.executeUpdate();
            return rowsInserted > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // Método para obtener un usuario por nombre de usuario (para autenticación)
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
}
