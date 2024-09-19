package com.api.TUniverso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.TUniverso.model.Buses;
import com.api.TUniverso.repository.BusRepository;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    public List<Buses> obtenerTodos() {
        return busRepository.findAll();
    }

    public Buses guardarBus(Buses bus) {
        return busRepository.save(bus);
    }
}
