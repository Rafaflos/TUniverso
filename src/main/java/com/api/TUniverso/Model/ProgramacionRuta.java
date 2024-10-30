package com.api.TUniverso.Model;

import jakarta.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "programacion_rutas")
public class ProgramacionRuta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long programacionId;

    @ManyToOne
    @JoinColumn(name = "ruta_id", nullable = false)
    private Ruta ruta;

    @ManyToOne
    @JoinColumn(name = "bus_id", nullable = false)
    private Bus bus;

    @ManyToOne
    @JoinColumn(name = "conductor_id", nullable = false)
    private Conductor conductor;

    private Date fechaSalida;
    private Time horaSalida;
    private Time horaLlegada;

    @Enumerated(EnumType.STRING)
    private EstadoProgramacion estado;

    // Getters y setters

    public Long getProgramacionId() {
        return programacionId;
    }

    public void setProgramacionId(Long programacionId) {
        this.programacionId = programacionId;
    }

    public Ruta getRuta() {
        return ruta;
    }

    public void setRuta(Ruta ruta) {
        this.ruta = ruta;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }

    public Conductor getConductor() {
        return conductor;
    }

    public void setConductor(Conductor conductor) {
        this.conductor = conductor;
    }

    public Date getFechaSalida() {
        return fechaSalida;
    }

    public void setFechaSalida(Date fechaSalida) {
        this.fechaSalida = fechaSalida;
    }

    public Time getHoraSalida() {
        return horaSalida;
    }

    public void setHoraSalida(Time horaSalida) {
        this.horaSalida = horaSalida;
    }

    public Time getHoraLlegada() {
        return horaLlegada;
    }

    public void setHoraLlegada(Time horaLlegada) {
        this.horaLlegada = horaLlegada;
    }

    public EstadoProgramacion getEstado() {
        return estado;
    }

    public void setEstado(EstadoProgramacion estado) {
        this.estado = estado;
    }

    // Constructor vacío y completo según sea necesario
}
// Enum para el estado de la programación
 enum EstadoProgramacion {
    programado, en_viaje, completado, cancelado
}

