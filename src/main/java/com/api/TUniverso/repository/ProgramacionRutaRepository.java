package com.api.TUniverso.repository;

import com.api.TUniverso.Model.ProgramacionRuta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgramacionRutaRepository extends JpaRepository<ProgramacionRuta, Long> {
}
