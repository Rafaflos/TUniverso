package com.api.TUniverso.security;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenUtil {

    private final String secretKey = "qWeRtY1u@"; // Cambia por algo más seguro
    private final long expirationTime = 86400000; // Tiempo de expiración de 1 día en milisegundos

    public String generarToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public boolean validarToken(String token, String username) {
        final String usernameExtraido = obtenerUsernameDelToken(token);
        return (usernameExtraido.equals(username) && !isTokenExpirado(token));
    }

    private boolean isTokenExpirado(String token) {
        return obtenerFechaExpiracionDelToken(token).before(new Date());
    }

    private Date obtenerFechaExpiracionDelToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }

    public String obtenerUsernameDelToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
