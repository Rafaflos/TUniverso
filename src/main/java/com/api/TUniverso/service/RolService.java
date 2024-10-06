package com.api.TUniverso.service;

import com.api.TUniverso.model.Permiso;
import com.api.TUniverso.model.Rol;
import com.api.TUniverso.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RolService {

    @Autowired
    private RolRepository rolRepository;

    public Rol guardarRol(Rol rol) {
        return rolRepository.save(rol);
    }

    public Optional<Rol> obtenerPorNombreRol(String nombreRol) {
        return rolRepository.findByNombreRol(nombreRol);
    }

    // Método para agregar permisos a un rol
    public void agregarPermisoARol(Long rolId, Permiso permiso) {
        Rol rol = rolRepository.findById(rolId)
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
        rol.getPermisos().add(permiso);
        rolRepository.save(rol);
    }
}
