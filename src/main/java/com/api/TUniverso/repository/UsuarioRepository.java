package com.api.TUniverso.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.TUniverso.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByUsername(String username);
}
