package com.api.TUniverso.service;

import com.api.TUniverso.Model.Usuario;
import com.api.TUniverso.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public UserDetailsServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Buscar el usuario en la base de datos por su username
        Usuario usuario = usuarioRepository.findByUsuario(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con el nombre: " + username));

        // Aquí creamos un objeto UserDetails basado en el usuario de la base de datos.
        // Estamos utilizando roles simples como ejemplo, puedes agregar lógica para roles más complejos si lo necesitas.
        return new org.springframework.security.core.userdetails.User(
                usuario.getUsuario(), // Username
                usuario.getContraseña(), // Contraseña
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + usuario.getTipoUsuario())) // Rol del usuario
        );
    }
}
