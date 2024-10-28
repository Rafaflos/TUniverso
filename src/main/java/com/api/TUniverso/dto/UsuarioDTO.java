package com.api.TUniverso.dto;

public class UsuarioDTO {
    private String usuario;
    private String email;
    private String contraseña;

    // Constructor vacío
    public UsuarioDTO() {}

    // Constructor con todos los parámetros
    public UsuarioDTO(String usuario, String email, String telefono, String contraseña) {
        this.usuario = usuario;
        this.email = email;
        this.contraseña = contraseña;
    }

    // Getters y Setters para cada atributo

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
}
