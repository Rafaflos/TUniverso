package com.api.TUniverso.repository;

import com.api.TUniverso.Model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {
}
