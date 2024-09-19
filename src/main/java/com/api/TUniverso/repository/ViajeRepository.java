package com.api.TUniverso.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.TUniverso.model.Viaje;

public interface ViajeRepository extends JpaRepository<Viaje, Long> {
    List<Viaje> findByUsuarioId(Long usuarioId);
}
