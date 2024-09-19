package com.api.TUniverso.controller;

import com.api.TUniverso.model.Buses;
import com.api.TUniverso.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buses")
public class BusController {

    @Autowired
    private BusService busService;

    @GetMapping
    public List<Buses> obtenerTodosLosBuses() {
        return busService.obtenerTodos();
    }

    @PostMapping
    public Buses guardarBus(@RequestBody Buses bus) {
        return busService.guardarBus(bus);
    }
}
