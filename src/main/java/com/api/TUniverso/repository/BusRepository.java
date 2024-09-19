package com.api.TUniverso.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.TUniverso.model.Buses;

public interface BusRepository extends JpaRepository<Buses, Long> {
    
}
