package com.api.TUniverso.Model;

import jakarta.persistence.*;

import java.util.Date;
import java.math.BigDecimal;
import java.util.Date;



@Entity
@Table (name = "rutas")
public class Ruta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String origen;

    @Column(nullable = false)
    private String destino;

    @Column(nullable = false)
    private BigDecimal precio;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date horarioSalida;

    @Column(nullable = false)
    @Temporal(TemporalType.TIME)
    private Date duracion;

    @Column(nullable = false)
    private String disponibilidad;

    @Column(nullable = false)
    private String claseServicio;

    @Column(nullable = false)
    private String operador;

    //Metodos adicionales de Negocio
    public void ajustarPrecio(BigDecimal porcentaje) {
        BigDecimal ajueste = precio.multiply(porcentaje).divide(new BigDecimal(100));
        this.precio = ajueste.add(ajueste);
    }

    // Constructor vacío
    public Ruta() {
    }


    // Getters y Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrigen() {
        return origen;
    }

    public void setOrigen(String origen) {
        this.origen = origen;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public Date getHorarioSalida() {
        return horarioSalida;
    }

    public void setHorarioSalida(Date horarioSalida) {
        this.horarioSalida = horarioSalida;
    }

    public Date getDuracion() {
        return duracion;
    }

    public void setDuracion(Date duracion) {
        this.duracion = duracion;
    }

    public String getDisponibilidad() {
        return disponibilidad;
    }

    public void setDisponibilidad(String disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public String getClaseServicio() {
        return claseServicio;
    }

    public void setClaseServicio(String claseServicio) {
        this.claseServicio = claseServicio;
    }

    public String getOperador() {
        return operador;
    }

    public void setOperador(String operador) {
        this.operador = operador;
    }
}
//Esto es para el admin