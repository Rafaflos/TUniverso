package com.api.TUniverso.service;

import com.api.TUniverso.Model.Rol;
import com.api.TUniverso.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService {

    @Autowired
    private RolRepository rolRepository;

    // Método para buscar un rol por su nombre
    public Optional<Rol> findByNombre(String nombre) {
        return rolRepository.findByNombre(nombre);
    }

    // Método para guardar un nuevo rol
    public Rol save(Rol rol) {
        return rolRepository.save(rol);
    }

    // Método para listar todos los roles
    public List<Rol> findAll() {
        return rolRepository.findAll();
    }
}
