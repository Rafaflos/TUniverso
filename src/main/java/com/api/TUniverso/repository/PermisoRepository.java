package com.api.TUniverso.repository;

import com.api.TUniverso.model.Permiso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PermisoRepository extends JpaRepository<Permiso, Long> {
    Optional<Permiso> findByNombrePermiso(String nombrePermiso);

}
