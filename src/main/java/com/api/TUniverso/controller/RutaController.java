package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Ruta;
import com.api.TUniverso.service.RutaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rutas")
@CrossOrigin(origins = "*")
public class RutaController {

    @Autowired
    private RutaService rutaService;

    @PostMapping("/guardar")
    public ResponseEntity<Ruta> guardarRuta(@RequestBody Ruta ruta) {
        Ruta rutaGuardada = rutaService.guardarRuta(ruta);
        return ResponseEntity.status(HttpStatus.CREATED).body(rutaGuardada);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ruta> obtenerRutaPorId(@PathVariable Long id) {
        Optional<Ruta> ruta = rutaService.obtenerRutaPorId(id);
        return ruta.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/todas")
    public ResponseEntity<List<Ruta>> obtenerTodasLasRutas() {
        List<Ruta> rutas = rutaService.obtenerTodasLasRutas();
        return ResponseEntity.ok(rutas);
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Ruta>> buscarRutasPorOrigenYDestino(
            @RequestParam String origen,
            @RequestParam String destino
    ) {
        List<Ruta> rutas = rutaService.buscarRutasPorOrigenYDestino(origen, destino);
        return ResponseEntity.ok(rutas);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarRuta(@PathVariable Long id) {
        rutaService.eliminarRuta(id);
        return ResponseEntity.ok("Ruta eliminada exitosamente");
    }
}
