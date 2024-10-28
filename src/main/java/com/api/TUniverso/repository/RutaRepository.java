package com.api.TUniverso.repository;

import com.api.TUniverso.Model.Ruta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RutaRepository extends JpaRepository<Ruta, Long> {

    // Método para buscar rutas por origen y destino
    List<Ruta> findByOrigenAndDestino(String origen, String destino);

    // Método para obtener todas las rutas
    List<Ruta> findAll();
}
