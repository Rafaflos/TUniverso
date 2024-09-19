package com.api.TUniverso.service;

import com.api.TUniverso.model.Conductor;
import com.api.TUniverso.repository.ConductorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConductorService {

    @Autowired
    private ConductorRepository conductorRepository;

    public List<Conductor> obtenerTodos() {
        return conductorRepository.findAll();
    }

    public Conductor guardarConductor(Conductor conductor) {
        return conductorRepository.save(conductor);
    }
}
