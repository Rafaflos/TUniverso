package com.api.TUniverso.service;

import com.api.TUniverso.Model.Usuario;
import com.api.TUniverso.dao.UsuarioDAO;
import com.api.TUniverso.dto.UsuarioDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioDAO usuarioDAO;

    public UsuarioService() {
        this.usuarioDAO = new UsuarioDAO();
    }

    // Registro de un nuevo usuario
    public boolean registrarUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario(
                0,
                usuarioDTO.getUsuario(),
                usuarioDTO.getEmail(),
                usuarioDTO.getContraseña(),
                "cliente", // Tipo de usuario por defecto
                "activo",  // Estado por defecto   //del login y registro
                usuarioDTO.getUsuario()
        );

        return usuarioDAO.registrarUsuario(usuario);
    }

    // Obtener usuario por nombre de usuario
    public Optional<Usuario> obtenerPorUsuario(String usuario) {
        return Optional.ofNullable(usuarioDAO.obtenerPorUsuario(usuario));
    }

    // Obtener todos los usuarios
    public List<Usuario> obtenerTodosLosUsuarios() {
        return usuarioDAO.obtenerTodosLosUsuarios();
    }

    // Obtener usuario por ID
    public Optional<Usuario> obtenerUsuarioPorId(Long id) {
        return usuarioDAO.obtenerUsuarioPorId(id);
    }

    public Usuario guardarUsuario(Usuario usuario) {
        // Verificar si el usuario ya existe en la base de datos
        Optional<Usuario> usuarioExistente = obtenerUsuarioPorId(usuario.getUsuario_id());

        if (usuarioExistente.isPresent()) {
            boolean actualizado = usuarioDAO.actualizarUsuario(usuario); // Si existe, intentamos actualizar
            if (!actualizado) {
                throw new RuntimeException("Error al actualizar el usuario con ID: " + usuario.getUsuario_id());
            }
        } else {
            usuarioDAO.registrarUsuario(usuario); // Si no existe, lo creamos
        }

        return usuario;
    }


    // Eliminar usuario por ID
    public boolean eliminarUsuario(Long id) {
        return usuarioDAO.eliminarUsuario(id);
    }
}
