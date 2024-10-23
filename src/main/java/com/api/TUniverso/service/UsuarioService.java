package com.api.TUniverso.service;

import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;

import com.api.TUniverso.dto.UsuarioDTO;
import com.api.TUniverso.model.Rol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.api.TUniverso.model.Usuario;
import com.api.TUniverso.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Guarda un usuario en la base de datos
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Obtiene un usuario por email
    public Optional<Usuario> obtenerPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    // Obtiene un usuario por nombre de usuario
    public Optional<Usuario> obtenerPorUsuario(String usuario) {
        return usuarioRepository.findByUsuario(usuario);
    }

    // Asigna un rol a un usuario
    public void asignarRolAUsuario(Long usuarioId, Rol rol) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        usuario.addRol(rol);
        usuarioRepository.save(usuario);
    }

    // Verifica si un usuario existe
    public boolean existsByUsername(String username) {
        return usuarioRepository.findByUsuario(username).isPresent();
    }

    // Guarda un nuevo usuario utilizando DTO
    public void save(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario();
        usuario.setUsuario(usuarioDTO.getUsuario());
        usuario.setContraseña(passwordEncoder.encode(usuarioDTO.getContraseña()));
        usuario.setRoles(new HashSet<>(Collections.singletonList(new Rol("ROLE_USER"))));  // Asignación del rol por defecto
        usuarioRepository.save(usuario);
    }

}
