package com.api.TUniverso.service;

import com.api.TUniverso.Model.Bus;
import com.api.TUniverso.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    public List<Bus> obtenerTodosLosBuses() {
        return busRepository.findAll();
    }

    public Optional<Bus> obtenerBusPorId(Long id) {
        return busRepository.findById(id);
    }

    public Bus guardarBus(Bus bus) {
        return busRepository.save(bus);
    }

    public void eliminarBus(Long id) {
        busRepository.deleteById(id);
    }
}
