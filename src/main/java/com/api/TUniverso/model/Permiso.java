package com.api.TUniverso.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "permisos")
public class Permiso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long permisoId;

    @Column(unique = true, nullable = false)
    private String nombrePermiso;

    @ManyToMany(mappedBy = "permisos")
    private Set<Rol> roles= new HashSet<>();

    // Constructor vacío
    public Permiso() {
    }

    // Constructor con argumentos
    public Permiso(String nombrePermiso) {
        this.nombrePermiso = nombrePermiso;
    }

    // Getters y Setters
    public Long getPermisoId() {
        return permisoId;
    }

    public void setPermisoId(Long permisoId) {
        this.permisoId = permisoId;
    }

    public String getNombrePermiso() {
        return nombrePermiso;
    }

    public void setNombrePermiso(String nombrePermiso) {
        this.nombrePermiso = nombrePermiso;
    }

    public Set<Rol> getRoles() {
        return roles;
    }

    public void setRoles(Set<Rol> roles) {
        this.roles = roles;
    }
}
