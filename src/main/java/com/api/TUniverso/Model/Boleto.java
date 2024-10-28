package com.api.TUniverso.Model;

import  com.api.TUniverso.Model.Usuario;
import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "boletos")
public class Boleto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boleto_id")
    private int boletoId;

    @Column(name = "usuario_id", nullable = false)
    private int usuarioId;

    @Column(name = "ruta_id", nullable = false)
    private int rutaId;

    @Column(name = "fecha_compra")
    private Timestamp fechaCompra;

    @Column(name = "asiento", nullable = false)
    private int asiento;

    @Column(name = "estado", nullable = false)
    private String estado;

    // Getters y setters

    public int getBoletoId() {
        return boletoId;
    }

    public void setBoletoId(int boletoId) {
        this.boletoId = boletoId;
    }

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public int getRutaId() {
        return rutaId;
    }

    public void setRutaId(int rutaId) {
        this.rutaId = rutaId;
    }

    public Timestamp getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Timestamp fechaCompra) {
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

    // Constructor vacío
    public Boleto() {}

    // Constructor completo
    public Boleto(int usuarioId, int rutaId, int asiento, String estado) {
        this.usuarioId = usuarioId;
        this.rutaId = rutaId;
        this.asiento = asiento;
        this.estado = estado;
        this.fechaCompra = new Timestamp(System.currentTimeMillis());  // Define la fecha actual
    }

    // Getters y setters aquí
}
