package com.api.TUniverso.repository;

import com.api.TUniverso.Model.Boleto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoletoRepository extends JpaRepository<Boleto, Integer> {
    // Agrega métodos adicionales de consulta si es necesario
}
