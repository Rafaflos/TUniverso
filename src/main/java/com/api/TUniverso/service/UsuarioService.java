package com.api.TUniverso.service;

import java.util.Optional;

import com.api.TUniverso.model.Rol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.TUniverso.model.Usuario;
import com.api.TUniverso.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> obtenerPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public Optional<Usuario> obtenerPorUsuario(String usuario) {
        return usuarioRepository.findByUsuario(usuario);
    }

    // Método para asignar roles a un usuario
    public void asignarRolAUsuario(Long usuarioId, Rol rol) {
        Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        usuario.addRol(rol);
        usuarioRepository.save(usuario);
    }

}
