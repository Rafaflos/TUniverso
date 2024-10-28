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

@CrossOrigin(origins = "http://localhost:63342")
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

        return ResponseEntity.ok(new JwtResponse(jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UsuarioDTO usuarioDTO) {
        if (usuarioService.obtenerPorUsuario(usuarioDTO.getUsuario()).isPresent()) {
            return ResponseEntity.badRequest().body("Error: El usuario ya existe.");
        }

        // Convertir UsuarioDTO a Usuario
        Usuario usuario = new Usuario();
        usuario.setUsuario(usuarioDTO.getUsuario());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setContraseña(usuarioDTO.getContraseña());
        usuario.setTipo_usuario("cliente"); // Asignación por defecto
        usuario.setEstado("activo");

        usuarioService.registrarUsuario(usuarioDTO);
        return ResponseEntity.ok("Usuario registrado exitosamente.");
    }
}
