package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Bus;
import com.api.TUniverso.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/buses")
public class BusController {

    @Autowired
    private BusService busService;

    @GetMapping
    public List<Bus> obtenerTodosLosBuses() {
        return busService.obtenerTodosLosBuses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bus> obtenerBusPorId(@PathVariable Long id) {
        Optional<Bus> bus = busService.obtenerBusPorId(id);
        return bus.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Bus crearBus(@RequestBody Bus bus) {
        return busService.guardarBus(bus);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bus> actualizarBus(@PathVariable Long id, @RequestBody Bus busActualizado) {
        Optional<Bus> busExistente = busService.obtenerBusPorId(id);
        if (busExistente.isPresent()) {
            busActualizado.setBusId(id);
            return ResponseEntity.ok(busService.guardarBus(busActualizado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarBus(@PathVariable Long id) {
        if (busService.obtenerBusPorId(id).isPresent()) {
            busService.eliminarBus(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
