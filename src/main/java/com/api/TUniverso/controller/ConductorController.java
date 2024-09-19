package com.api.TUniverso.controller;

import com.api.TUniverso.model.Conductor;
import com.api.TUniverso.service.ConductorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conductores")
public class ConductorController {

    @Autowired
    private ConductorService conductorService;

    @GetMapping
    public List<Conductor> obtenerTodosLosConductores() {
        return conductorService.obtenerTodos();
    }

    @PostMapping
    public Conductor guardarConductor(@RequestBody Conductor conductor) {
        return conductorService.guardarConductor(conductor);
    }
}
