package com.api.TUniverso.controller;


import com.api.TUniverso.Model.Ruta;
import com.api.TUniverso.service.RutaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rutas")
public class RutaController {

    @Autowired
    private RutaService rutaService;

    @GetMapping
    public List<Ruta> getAllRutas() {
        return rutaService.findAllRutas();
    }

    @PostMapping
    public Ruta createRuta(@RequestBody Ruta ruta) {
        return rutaService.saveRuta(ruta);
    }

    @DeleteMapping("/{id}")
    public void deleteRuta(@PathVariable Long id) {
        rutaService.deleteRuta(id);
    }
}
