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

    public Boleto guardarBoleto(Boleto boleto) {
        return boletoRepository.save(boleto);
    }

    public List<Boleto> obtenerTodosBoletos() {
        return boletoRepository.findAll();
    }

    public Optional<Boleto> obtenerBoletoPorId(int id) {
        return boletoRepository.findById(id);
    }

    public void eliminarBoleto(int id) {
        boletoRepository.deleteById(id);
    }
}
