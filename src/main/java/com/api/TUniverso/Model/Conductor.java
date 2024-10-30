package com.api.TUniverso.Model;

import jakarta.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "conductores")
public class Conductor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long conductorId;

    private String nombre;
    private String dni;
    private String licencia;
    private String telefono;
    private Date fechaContratacion;

    @Enumerated(EnumType.STRING)
    private EstadoConductor estado;

    // Constructor vacío
    public Conductor() {}

    // Constructor completo
    public Conductor(String nombre, String dni, String licencia, String telefono, Date fechaContratacion, EstadoConductor estado) {
        this.nombre = nombre;
        this.dni = dni;
        this.licencia = licencia;
        this.telefono = telefono;
        this.fechaContratacion = fechaContratacion;
        this.estado = estado;
    }

    // Getters y setters
    public Long getConductorId() {
        return conductorId;
    }

    public void setConductorId(Long conductorId) {
        this.conductorId = conductorId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getLicencia() {
        return licencia;
    }

    public void setLicencia(String licencia) {
        this.licencia = licencia;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Date getFechaContratacion() {
        return fechaContratacion;
    }

    public void setFechaContratacion(Date fechaContratacion) {
        this.fechaContratacion = fechaContratacion;
    }

    public EstadoConductor getEstado() {
        return estado;
    }

    public void setEstado(EstadoConductor estado) {
        this.estado = estado;
    }
}

// Enum para el estado del conductor
enum EstadoConductor {
    ACTIVO, INACTIVO
}
