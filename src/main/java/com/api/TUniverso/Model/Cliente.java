package com.api.TUniverso.Model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clienteId;

    private String nombre;
    private String apellido;

    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;

    private String genero;
    private String nacionalidad;

    @Column(name = "tipo_documento")
    private String tipoDocumento;

    @Column(name = "numero_documento", unique = true)
    private String numeroDocumento;

    @Column(name = "numero_pasajero_frecuente")
    private String numeroPasajeroFrecuente;

    private String aerolinea;

    private String email;

    @Column(name = "telefono_codigo_pais")
    private String telefonoCodigoPais;

    @Column(name = "telefono_numero")
    private String telefonoNumero;

    @Column(name = "asistencia_especial")
    private Boolean asistenciaEspecial = false;

    // Getters y Setters

    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getNumeroDocumento() {
        return numeroDocumento;
    }

    public void setNumeroDocumento(String numeroDocumento) {
        this.numeroDocumento = numeroDocumento;
    }

    public String getNumeroPasajeroFrecuente() {
        return numeroPasajeroFrecuente;
    }

    public void setNumeroPasajeroFrecuente(String numeroPasajeroFrecuente) {
        this.numeroPasajeroFrecuente = numeroPasajeroFrecuente;
    }

    public String getAerolinea() {
        return aerolinea;
    }

    public void setAerolinea(String aerolinea) {
        this.aerolinea = aerolinea;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefonoCodigoPais() {
        return telefonoCodigoPais;
    }

    public void setTelefonoCodigoPais(String telefonoCodigoPais) {
        this.telefonoCodigoPais = telefonoCodigoPais;
    }

    public String getTelefonoNumero() {
        return telefonoNumero;
    }

    public void setTelefonoNumero(String telefonoNumero) {
        this.telefonoNumero = telefonoNumero;
    }

    public Boolean getAsistenciaEspecial() {
        return asistenciaEspecial;
    }

    public void setAsistenciaEspecial(Boolean asistenciaEspecial) {
        this.asistenciaEspecial = asistenciaEspecial;
    }
}
