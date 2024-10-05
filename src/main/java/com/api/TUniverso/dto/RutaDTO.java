package com.api.TUniverso.dto;

public class RutaDTO {
    private Long rutaId;
    private String origen;
    private String destino;
    private double precio;
    private String horarioSalida;
    private String duracion;

    // Getters y Setters

    public Long getRutaId() {
        return rutaId;
    }

    public void setRutaId(Long rutaId) {
        this.rutaId = rutaId;
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

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getHorarioSalida() {
        return horarioSalida;
    }

    public void setHorarioSalida(String horarioSalida) {
        this.horarioSalida = horarioSalida;
    }

    public String getDuracion() {
        return duracion;
    }
    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }
}
