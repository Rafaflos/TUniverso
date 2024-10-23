package com.api.TUniverso.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenUtil {

    private final String secretKey = "abc@546"; // Cambia por una variable de entorno o archivo de configuración
    private final long expirationTime = 86400000; // 1 día en milisegundos
    private final Key signingKey = new SecretKeySpec(secretKey.getBytes(), SignatureAlgorithm.HS256.getJcaName());

    public String generarToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(signingKey, SignatureAlgorithm.HS256)
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
        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }

    private String obtenerUsernameDelToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
