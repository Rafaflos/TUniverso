package com.api.TUniverso.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.api.TUniverso.utils.UsuarioMapper;  // Clase utilitaria para la conversión de entidades

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioMapper usuarioMapper;  // Inyección de la clase que convierte Usuario a DTO

    @GetMapping("/{username}")
    public ResponseEntity<UsuarioDTO> obtenerUsuario(@PathVariable String username) {
        Optional<Usuario> usuarioOpt = usuarioService.obtenerPorUsername(username);
        if (usuarioOpt.isPresent()) {
            UsuarioDTO usuarioDTO = usuarioMapper.convertirAUsuarioDTO(usuarioOpt.get());
            return ResponseEntity.ok(usuarioDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> guardarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        // Convertir de DTO a la entidad Usuario
        Usuario usuario = usuarioMapper.convertirAUsuario(usuarioDTO);
        Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario);

        // Convertir nuevamente a DTO para devolver la respuesta
        UsuarioDTO usuarioRespuestaDTO = usuarioMapper.convertirAUsuarioDTO(usuarioGuardado);
        return ResponseEntity.ok(usuarioRespuestaDTO);
    }
}
