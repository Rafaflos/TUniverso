package com.api.TUniverso.controller;

import com.api.TUniverso.Model.ProgramacionRuta;
import com.api.TUniverso.service.ProgramacionRutaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/programaciones")
public class ProgramacionRutaController {

    @Autowired
    private ProgramacionRutaService programacionRutaService;

    @GetMapping
    public List<ProgramacionRuta> obtenerTodasLasProgramaciones() {
        return programacionRutaService.obtenerTodasLasProgramaciones();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProgramacionRuta> obtenerProgramacionPorId(@PathVariable Long id) {
        Optional<ProgramacionRuta> programacionRuta = programacionRutaService.obtenerProgramacionPorId(id);
        return programacionRuta.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ProgramacionRuta> crearProgramacion(@RequestBody ProgramacionRuta programacionRuta) {
        ProgramacionRuta nuevaProgramacion = programacionRutaService.guardarProgramacion(programacionRuta);
        return ResponseEntity.ok(nuevaProgramacion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProgramacionRuta> actualizarProgramacion(
            @PathVariable Long id, @RequestBody ProgramacionRuta programacionRutaActualizada) {
        Optional<ProgramacionRuta> programacionRutaExistente = programacionRutaService.obtenerProgramacionPorId(id);
        if (programacionRutaExistente.isPresent()) {
            programacionRutaActualizada.setProgramacionId(id);
            ProgramacionRuta programacionActualizada = programacionRutaService.guardarProgramacion(programacionRutaActualizada);
            return ResponseEntity.ok(programacionActualizada);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProgramacion(@PathVariable Long id) {
        if (programacionRutaService.obtenerProgramacionPorId(id).isPresent()) {
            programacionRutaService.eliminarProgramacion(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
