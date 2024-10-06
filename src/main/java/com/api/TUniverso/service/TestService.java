package com.api.TUniverso.service;

import com.api.TUniverso.model.Rol;
import com.api.TUniverso.model.Usuario;
import com.api.TUniverso.repository.RolRepository;
import com.api.TUniverso.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;

@Service
public class TestService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;

    public void testRelationships() {
        // Crear un nuevo rol
        Rol rol = new Rol();
        rol.setNombreRol("ROLE_ADMIN");
        rolRepository.save(rol);

        // Crear un nuevo usuario
        Usuario usuario = new Usuario();
        usuario.setUsuario("JuanPerez");
        usuario.setNombre("Juan Perez");
        usuario.setEmail("juan@example.com");
        usuario.setContraseña("contraseña");  // Recuerda usar hash en producción
        usuario.setTipoUsuario("tipo");
        usuario.setEstado("activo");
        usuario.setFechaRegistro(new Timestamp(System.currentTimeMillis()));  // Establecer la fecha de registro


        // Inicializar la colección de roles antes de asignarlos
        usuario.setRoles(new HashSet<>());  // Asegurarse de que los roles no sean nulos

        // Asignar el rol al usuario
        usuario.getRoles().add(rol);
        usuarioRepository.save(usuario);

        // Recuperar el usuario y sus roles
        Usuario usuarioRecuperado = usuarioRepository.findById(usuario.getId()).orElse(null);
        if (usuarioRecuperado != null) {
            System.out.println("Usuario: " + usuarioRecuperado.getNombre());
            usuarioRecuperado.getRoles().forEach(r -> System.out.println("Rol: " + r.getNombreRol()));
        }
    }
}
