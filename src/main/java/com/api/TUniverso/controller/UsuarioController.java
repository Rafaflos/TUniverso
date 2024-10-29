package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Usuario;
import com.api.TUniverso.dto.UsuarioDTO;
import com.api.TUniverso.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3004")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // Obtener todos los usuarios
    @GetMapping
    public ResponseEntity<List<Usuario>> obtenerTodosLosUsuarios() {
        List<Usuario> usuarios = usuarioService.obtenerTodosLosUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    // Obtener usuario por ID
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.obtenerUsuarioPorId(id);
        return usuario.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Crear un nuevo usuario
    @PostMapping("/register")
    public ResponseEntity<String> crearUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        if (usuarioService.obtenerPorUsuario(usuarioDTO.getUsuario()).isPresent()) {
            return ResponseEntity.badRequest().body("Error: El usuario ya existe.");
        }

        boolean registrado = usuarioService.registrarUsuario(usuarioDTO);
        if (registrado) {
            return ResponseEntity.ok("Usuario registrado exitosamente.");
        } else {
            return ResponseEntity.status(500).body("Error al registrar el usuario.");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        usuario.setUsuario_id(id); // Asegúrate de que el ID está siendo seteado correctamente en el objeto usuario
        Usuario usuarioActualizado = usuarioService.guardarUsuario(usuario); // Llamada a guardarUsuario en el servicio
        return ResponseEntity.ok(usuarioActualizado);
    }

    // Eliminar un usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
        if (usuarioService.eliminarUsuario(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
