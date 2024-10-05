package com.api.TUniverso.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtTokenUtil {
    private final String secretKey = "tuniverso2024"; // Cambia esto por una clave más segura
    private final long expirationTime = 86400000; // 1 día en milisegundos

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
        final Date fechaExpiracion = obtenerFechaExpiracionDelToken(token);
        return fechaExpiracion.before(new Date());
    }

    private Date obtenerFechaExpiracionDelToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }

    private String obtenerUsernameDelToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
