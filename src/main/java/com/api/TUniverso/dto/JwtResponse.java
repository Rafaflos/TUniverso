package com.api.TUniverso.dto;

public class JwtResponse {

    private String token;
    private String type = "Bearer";
    private String username;

    public JwtResponse(String token) {
        this.token = token;
        this.username = username;
    }

    // Getters y Setters

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}