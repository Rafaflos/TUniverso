package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Usuario;
import com.api.TUniverso.dto.UsuarioDTO;
import com.api.TUniverso.dto.LoginRequest;
import com.api.TUniverso.dto.JwtResponse;
import com.api.TUniverso.security.JwtTokenProvider;
import com.api.TUniverso.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsuario(), loginRequest.getContraseña())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generar el token JWT
        String jwt = jwtTokenProvider.generateToken(authentication.getName());

        // Obtener el usuario y verificar el tipo de usuario
        Usuario usuario = usuarioService.obtenerPorUsuario(loginRequest.getUsuario()).orElse(null);
        String tipoUsuario = usuario != null ? usuario.getTipo_usuario() : "cliente";

        return ResponseEntity.ok(new JwtResponse(jwt, tipoUsuario));
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UsuarioDTO usuarioDTO) {
        // Verifica si el usuario ya existe
        if (usuarioService.obtenerPorUsuario(usuarioDTO.getUsuario()).isPresent()) {
            return ResponseEntity.badRequest().body("Error: El usuario ya existe.");
        }

        // Registrar el usuario
        boolean registrado = usuarioService.registrarUsuario(usuarioDTO);
        if (registrado) {
            return ResponseEntity.ok("Usuario registrado exitosamente.");
        } else {
            return ResponseEntity.status(500).body("Error al registrar el usuario.");
        }
    }
}
