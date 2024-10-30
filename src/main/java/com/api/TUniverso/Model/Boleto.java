package com.api.TUniverso.Model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "boletos")
public class Boleto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boletoId;

    // Relación con Cliente
    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = true) // Puede ser null para usuarios no registrados
    private Cliente cliente;

    // Relación con Programación de Ruta
    @ManyToOne
    @JoinColumn(name = "programacion_ruta_id", nullable = false)
    private ProgramacionRuta programacionRuta;

    private Integer asiento;

    private Boolean equipajeExtra;

    private BigDecimal precioTotal;

    @Enumerated(EnumType.STRING)
    private EstadoBoleto estado;

    private Timestamp fechaCompra;

    @Column(unique = true, nullable = false)
    private String codigoReserva;

    // Getters y Setters

    public Long getBoletoId() {
        return boletoId;
    }

    public void setBoletoId(Long boletoId) {
        this.boletoId = boletoId;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public ProgramacionRuta getProgramacionRuta() {
        return programacionRuta;
    }

    public void setProgramacionRuta(ProgramacionRuta programacionRuta) {
        this.programacionRuta = programacionRuta;
    }

    public Integer getAsiento() {
        return asiento;
    }

    public void setAsiento(Integer asiento) {
        this.asiento = asiento;
    }

    public Boolean getEquipajeExtra() {
        return equipajeExtra;
    }

    public void setEquipajeExtra(Boolean equipajeExtra) {
        this.equipajeExtra = equipajeExtra;
    }

    public BigDecimal getPrecioTotal() {
        return precioTotal;
    }

    public void setPrecioTotal(BigDecimal precioTotal) {
        this.precioTotal = precioTotal;
    }

    public EstadoBoleto getEstado() {
        return estado;
    }

    public void setEstado(EstadoBoleto estado) {
        this.estado = estado;
    }

    public Timestamp getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Timestamp fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public String getCodigoReserva() {
        return codigoReserva;
    }

    public void setCodigoReserva(String codigoReserva) {
        this.codigoReserva = codigoReserva;
    }

    // Generación automática del código de reserva
    @PrePersist
    protected void generarCodigoReserva() {
        this.codigoReserva = "BOL-" + System.currentTimeMillis();  // Lógica básica, puedes personalizarla
    }
}
