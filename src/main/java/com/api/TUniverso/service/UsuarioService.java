package com.api.TUniverso.service;

import com.api.TUniverso.Model.Usuario;
import com.api.TUniverso.dao.UsuarioDAO;
import com.api.TUniverso.dto.UsuarioDTO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    private UsuarioDAO usuarioDAO;

    public UsuarioService() {
        this.usuarioDAO = new UsuarioDAO();
    }

    // Método para registrar un nuevo usuario utilizando UsuarioDTO
    public boolean registrarUsuario(UsuarioDTO usuarioDTO) {
        // Convertir UsuarioDTO a Usuario
        Usuario usuario = new Usuario(
                0,
                usuarioDTO.getUsuario(),
                usuarioDTO.getEmail(),
                usuarioDTO.getContraseña(),
                "cliente", // Tipo de usuario por defecto
                "activo",  // Estado por defecto
                usuarioDTO.getUsuario()
        );

        return usuarioDAO.registrarUsuario(usuario);
    }

    // Método para verificar si un usuario existe por su nombre de usuario
    public Optional<Usuario> obtenerPorUsuario(String usuario) {
        return Optional.ofNullable(usuarioDAO.obtenerPorUsuario(usuario));
    }

    // Método para guardar un usuario directamente
    public boolean guardarUsuario(UsuarioDTO usuarioDTO) {
        // Convertir UsuarioDTO a Usuario
        Usuario usuario = new Usuario(
                0,
                usuarioDTO.getUsuario(),
                usuarioDTO.getEmail(),
                usuarioDTO.getContraseña(),
                "cliente", // Tipo de usuario por defecto
                "activo",  // Estado por defecto
                usuarioDTO.getUsuario()
        );

        return usuarioDAO.registrarUsuario(usuario);
    }
}
