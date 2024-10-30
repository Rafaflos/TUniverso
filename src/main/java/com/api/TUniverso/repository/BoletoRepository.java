package com.api.TUniverso.repository;

import com.api.TUniverso.Model.Boleto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoletoRepository extends JpaRepository<Boleto, Long> {
    Optional<Boleto> findByCodigoReserva(String codigoReserva);
}
