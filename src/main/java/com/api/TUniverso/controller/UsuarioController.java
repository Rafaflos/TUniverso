package com.api.TUniverso.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.api.TUniverso.dto.UsuarioDTO;
import com.api.TUniverso.model.Usuario;
import com.api.TUniverso.service.UsuarioService;
import com.api.TUniverso.utils.UsuarioMapper;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioMapper usuarioMapper;

    @GetMapping("/{usuario}") // Cambiado a "usuario"
    public ResponseEntity<UsuarioDTO> obtenerUsuario(@PathVariable String usuario) {
        Optional<Usuario> usuarioOpt = usuarioService.obtenerPorUsuario(usuario); // Cambiado a "usuario"
        if (usuarioOpt.isPresent()) {
            UsuarioDTO usuarioDTO = usuarioMapper.convertirAUsuarioDTO(usuarioOpt.get());
            return ResponseEntity.ok(usuarioDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> guardarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioMapper.convertirAUsuario(usuarioDTO);
        Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario);
        UsuarioDTO usuarioRespuestaDTO = usuarioMapper.convertirAUsuarioDTO(usuarioGuardado);
        return ResponseEntity.ok(usuarioRespuestaDTO);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UsuarioDTO usuarioDTO) {
        if (usuarioService.existsByUsername(usuarioDTO.getUsuario())) {
            return ResponseEntity.badRequest().body("El usuario ya existe");
        }
        usuarioService.save(usuarioDTO);
        return ResponseEntity.ok("Usuario registrado exitosamente");
    }

}
