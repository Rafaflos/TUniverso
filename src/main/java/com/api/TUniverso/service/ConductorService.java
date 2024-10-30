package com.api.TUniverso.service;

import com.api.TUniverso.Model.Conductor;
import com.api.TUniverso.repository.ConductorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConductorService {

    @Autowired
    private ConductorRepository conductorRepository;

    public List<Conductor> obtenerTodosLosConductores() {
        return conductorRepository.findAll();
    }

    public Optional<Conductor> obtenerConductorPorId(Long id) {
        return conductorRepository.findById(id);
    }

    public Conductor guardarConductor(Conductor conductor) {
        return conductorRepository.save(conductor);
    }

    public void eliminarConductor(Long id) {
        conductorRepository.deleteById(id);
    }
}
