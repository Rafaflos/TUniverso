package com.api.TUniverso.repository;


import com.api.TUniverso.Model.Ruta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RutaRepository extends JpaRepository<Ruta, Long> {
    List<Ruta> findByOrigenAndDestino(String origen, String destino);
}
