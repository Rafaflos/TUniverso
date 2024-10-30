package com.api.TUniverso.service;

import com.api.TUniverso.Model.Boleto;
import com.api.TUniverso.repository.BoletoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoletoService {

    @Autowired
    private BoletoRepository boletoRepository;

    // Crear un nuevo boleto
    public Boleto crearBoleto(Boleto boleto) {
        return boletoRepository.save(boleto);
    }

    // Obtener todos los boletos
    public List<Boleto> obtenerTodosLosBoletos() {
        return boletoRepository.findAll();
    }

    // Obtener un boleto por ID
    public Optional<Boleto> obtenerBoletoPorId(Long id) {
        return boletoRepository.findById(id);
    }

    // Obtener un boleto por código de reserva
    public Optional<Boleto> obtenerBoletoPorCodigoReserva(String codigoReserva) {
        return boletoRepository.findByCodigoReserva(codigoReserva);
    }

    // Actualizar un boleto existente
    public Boleto actualizarBoleto(Boleto boleto) {
        return boletoRepository.save(boleto);
    }

    // Eliminar un boleto por ID
    public void eliminarBoleto(Long id) {
        boletoRepository.deleteById(id);
    }
}
