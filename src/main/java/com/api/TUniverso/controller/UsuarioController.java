package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Rol;
import com.api.TUniverso.Model.Usuario;
import com.api.TUniverso.service.UsuarioService;
import com.api.TUniverso.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private RolRepository rolRepository;

    // Endpoint para registrar un nuevo usuario
    @PostMapping("/register")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        if (usuarioService.obtenerPorEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("El usuario ya existe.");
        }
        Usuario nuevoUsuario = usuarioService.guardarUsuario(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }

    // Endpoint para obtener un usuario por su email
    @GetMapping("/{email}")
    public ResponseEntity<?> obtenerUsuario(@PathVariable String email) {
        Optional<Usuario> usuario = usuarioService.obtenerPorEmail(email);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint para asignar un rol a un usuario específico
    @PostMapping("/admin/usuario/{id}/asignarRol")
    public ResponseEntity<?> asignarRolAUsuario(@PathVariable Long   id, @RequestBody String rolNombre) {
        Usuario usuario = usuarioService.obtenerPorId(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Rol rol = rolRepository.findByNombre(rolNombre)
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));

        usuario.getRoles().add(rol);
        usuarioService.guardarUsuario(usuario);

        return ResponseEntity.ok("Rol asignado exitosamente");
    }
}
