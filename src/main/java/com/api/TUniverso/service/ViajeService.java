package com.api.TUniverso.service;

import com.api.TUniverso.model.Viaje;
import com.api.TUniverso.repository.ViajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViajeService {

    @Autowired
    private ViajeRepository viajeRepository;

    public List<Viaje> obtenerViajesPorCliente(Long clienteId) {
        return viajeRepository.findByUsuarioId(clienteId);
    }
}
