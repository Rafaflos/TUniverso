package com.api.TUniverso.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "buses")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long busId;

    @Column(unique = true, nullable = false)
    private String placa;

    private String modelo;
    private int capacidad;
    private int año;

    @Enumerated(EnumType.STRING)
    private EstadoBus estado;

    // Constructor vacío
    public Bus() {}

    // Constructor completo
    public Bus(String placa, String modelo, int capacidad, int año, EstadoBus estado) {
        this.placa = placa;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.año = año;
        this.estado = estado;
    }

    // Getters y setters
    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public int getAño() {
        return año;
    }

    public void setAño(int año) {
        this.año = año;
    }

    public EstadoBus getEstado() {
        return estado;
    }

    public void setEstado(EstadoBus estado) {
        this.estado = estado;
    }
}

// Enum para el estado del bus
 enum EstadoBus {
    activo, inactivo
}
