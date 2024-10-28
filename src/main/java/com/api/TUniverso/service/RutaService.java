package com.api.TUniverso.service;

import com.api.TUniverso.Model.Ruta;
import com.api.TUniverso.repository.RutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RutaService {

    @Autowired
    private RutaRepository rutaRepository;

    // Guardar una nueva ruta
    public Ruta guardarRuta(Ruta ruta) {
        return rutaRepository.save(ruta);
    }

    // Obtener ruta por ID
    public Optional<Ruta> obtenerRutaPorId(Long id) {
        return rutaRepository.findById(id);
    }

    // Obtener todas las rutas
    public List<Ruta> obtenerTodasLasRutas() {
        return rutaRepository.findAll();
    }

    // Buscar rutas por origen y destino
    public List<Ruta> buscarRutasPorOrigenYDestino(String origen, String destino) {
        return rutaRepository.findByOrigenAndDestino(origen, destino);
    }

    // Eliminar una ruta por ID
    public void eliminarRuta(Long id) {
        rutaRepository.deleteById(id);
    }
}
