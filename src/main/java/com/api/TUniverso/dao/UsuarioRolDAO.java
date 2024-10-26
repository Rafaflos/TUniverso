package com.api.TUniverso.dao;

import com.api.TUniverso.Model.UsuarioRol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRolDAO extends JpaRepository<UsuarioRol, Long> {
    // Aquí puedes agregar consultas específicas si las necesitas
}
