package com.api.TUniverso.dto;

public class JwtResponse {
    private String token;
    private String tipoUsuario;

    public JwtResponse(String token , String tipoUsuario) {
        this.token = token;
        this.tipoUsuario = tipoUsuario;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    public String getTipoUsuario() {
        return tipoUsuario;
    }
}
