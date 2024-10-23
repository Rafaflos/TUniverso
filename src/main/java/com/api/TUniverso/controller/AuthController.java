package com.api.TUniverso.controller;

import com.api.TUniverso.dto.JwtResponse;
import com.api.TUniverso.dto.LoginRequest;
import com.api.TUniverso.security.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {


        @Autowired
        private AuthenticationManager authenticationManager;

        @Autowired
        private JwtTokenUtil jwtTokenUtil;

        @PostMapping("/login")
        public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsuario(), loginRequest.getContraseña())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Generar el token JWT
            String jwt = jwtTokenUtil.generarToken(String.valueOf(authentication));

            return ResponseEntity.ok(new JwtResponse(jwt));
        }
    }


