package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Rol;
import com.api.TUniverso.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/roles")
public class RolController {

    @Autowired
    private RolService rolService;

    // Crear un nuevo rol
    @PostMapping("/crear")
    public ResponseEntity<Rol> crearRol(@RequestBody Rol rol) {
        Rol nuevoRol = rolService.save(rol);
        return ResponseEntity.ok(nuevoRol);
    }

    // Obtener todos los roles
    @GetMapping("/todos")
    public ResponseEntity<List<Rol>> obtenerTodosLosRoles() {
        List<Rol> roles = rolService.findAll();
        return ResponseEntity.ok(roles);
    }

    // Obtener un rol por nombre
    @GetMapping("/buscar/{nombre}")
    public ResponseEntity<Rol> obtenerRolPorNombre(@PathVariable String nombre) {
        Optional<Rol> rol = rolService.findByNombre(nombre);
        if (rol.isPresent()) {
            return ResponseEntity.ok(rol.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
