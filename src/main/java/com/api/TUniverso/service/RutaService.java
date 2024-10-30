package com.api.TUniverso.service;

import com.api.TUniverso.Model.Ruta;
import com.api.TUniverso.repository.RutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RutaService {
    @Autowired
    private RutaRepository rutaRepository;

    public List<Ruta> findAllRutas() {
        return rutaRepository.findAll();
    }

    public Ruta saveRuta(Ruta ruta) {
        return rutaRepository.save(ruta);
    }

    public void deleteRuta(Long id) {
        rutaRepository.deleteById(id);
    }
}

