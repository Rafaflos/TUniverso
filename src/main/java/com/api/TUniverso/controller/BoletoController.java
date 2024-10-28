package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Boleto;
import com.api.TUniverso.service.BoletoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boletos")
public class BoletoController {

    @Autowired
    private BoletoService boletoService;

    @PostMapping("/compra")
    public ResponseEntity<Boleto> comprarBoleto(@RequestBody Boleto boleto) {
        Boleto nuevoBoleto = boletoService.guardarBoleto(boleto);
        return ResponseEntity.ok(nuevoBoleto);
    }

    @GetMapping
    public List<Boleto> obtenerTodosBoletos() {
        return boletoService.obtenerTodosBoletos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Boleto> obtenerBoletoPorId(@PathVariable int id) {
        return boletoService.obtenerBoletoPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarBoleto(@PathVariable int id) {
        boletoService.eliminarBoleto(id);
        return ResponseEntity.noContent().build();
    }
}
