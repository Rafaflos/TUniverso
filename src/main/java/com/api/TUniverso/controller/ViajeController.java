package com.api.TUniverso.controller;

import com.api.TUniverso.model.Viaje;
import com.api.TUniverso.service.ViajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/viajes")
public class ViajeController {

    @Autowired
    private ViajeService viajeService;



    @GetMapping("/mis-viajes/{clienteId}")
    public List<Viaje> obtenerHistorialDeViajes(@PathVariable Long clienteId) {
        return viajeService.obtenerViajesPorCliente(clienteId);
    }


}
