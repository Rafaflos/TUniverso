package com.api.TUniverso.service;

import com.api.TUniverso.Model.Rol;
import com.api.TUniverso.Model.Usuario;
import com.api.TUniverso.dao.UsuarioDAO;
import com.api.TUniverso.repository.RolRepository;
import com.api.TUniverso.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioDAO usuarioDAO; // Cambia a UsuarioRepository si no estás usando DAO

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Guarda un nuevo usuario con un rol por defecto
    public Usuario guardarUsuario(Usuario usuario) {
        // Encripta la contraseña antes de guardar el usuario
        usuario.setContraseña(bCryptPasswordEncoder.encode(usuario.getContraseña()));

        // Asigna un rol por defecto (ROLE_USER)
        Set<Rol> roles = new HashSet<>();
        Rol userRole = rolRepository.findByNombre("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Error: Rol no encontrado."));
        roles.add(userRole);
        usuario.setRoles(roles);

        // Guarda el usuario con el rol asignado
        return usuarioDAO.save(usuario); // O usuarioRepository.save(usuario) si no usas DAO
    }

    // Obtiene un usuario por su email
    public Optional<Usuario> obtenerPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    // Obtiene un usuario por su nombre de usuario
    public Optional<Usuario> obtenerPorUsuario(String usuario) {
        return usuarioDAO.findByUsuario(usuario); // O usuarioRepository si decides usar Repository
    }

    // Obtiene un usuario por su ID
    public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }
}
