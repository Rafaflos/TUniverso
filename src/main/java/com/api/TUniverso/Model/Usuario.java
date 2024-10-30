package com.api.TUniverso.Model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    private long usuario_id;
    private String nombre;
    private String email;
    private String contraseña;
    private String tipo_usuario;
    private String estado;
    private String usuario;



    // Constructor vacío
    public Usuario() {}



    // Constructor completo (útil para crear el usuario con todos los datos)
    public Usuario(long usuario_id, String nombre, String email, String contraseña, String tipo_usuario, String estado, String usuario) {
        this.usuario_id = usuario_id;
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.tipo_usuario = tipo_usuario;
        this.estado = estado;
        this.usuario = usuario;


    }

    // Getters y Setters para cada atributo
    public long getUsuario_id() {
        return usuario_id;
    }

    public void setUsuario_id(Long usuario_id) {
        this.usuario_id = usuario_id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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

    public String getTipo_usuario() {
        return tipo_usuario;
    }

    public void setTipo_usuario(String tipo_usuario) {
        this.tipo_usuario = tipo_usuario;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
}
