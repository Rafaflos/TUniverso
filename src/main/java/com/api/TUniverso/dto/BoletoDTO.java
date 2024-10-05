package com.api.TUniverso.dto;

public class BoletoDTO {
    private Long boletoId;
    private Long usuarioId;
    private Long rutaId;
    private String fechaCompra;
    private int asiento;
    private String estado;

    // Getters y Setters

    public Long getBoletoId() {
        return boletoId;
    }

    public void setBoletoId(Long boletoId) {
        this.boletoId = boletoId;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getRutaId() {
        return rutaId;
    }

    public void setRutaId(Long rutaId) {
        this.rutaId = rutaId;
    }

    public String getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(String fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public int getAsiento() {
        return asiento;
    }

    public void setAsiento(int asiento) {
        this.asiento = asiento;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
