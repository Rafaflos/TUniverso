package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Conductor;
import com.api.TUniverso.service.ConductorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/conductores")
public class ConductorController {

    @Autowired
    private ConductorService conductorService;

    @GetMapping
    public List<Conductor> obtenerTodosLosConductores() {
        return conductorService.obtenerTodosLosConductores();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conductor> obtenerConductorPorId(@PathVariable Long id) {
        Optional<Conductor> conductor = conductorService.obtenerConductorPorId(id);
        return conductor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Conductor crearConductor(@RequestBody Conductor conductor) {
        return conductorService.guardarConductor(conductor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Conductor> actualizarConductor(
            @PathVariable Long id, @RequestBody Conductor conductorActualizado) {
        Optional<Conductor> conductor = conductorService.obtenerConductorPorId(id);
        if (conductor.isPresent()) {
            conductorActualizado.setConductorId(id);
            return ResponseEntity.ok(conductorService.guardarConductor(conductorActualizado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarConductor(@PathVariable Long id) {
        if (conductorService.obtenerConductorPorId(id).isPresent()) {
            conductorService.eliminarConductor(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
