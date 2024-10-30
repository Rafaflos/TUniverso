package com.api.TUniverso.controller;

import com.api.TUniverso.Model.Boleto;
import com.api.TUniverso.service.BoletoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/boletos")
public class BoletoController {

    @Autowired
    private BoletoService boletoService;

    // Endpoint para crear un nuevo boleto (compra de boleto)
    @PostMapping("/comprar")
    public ResponseEntity<Boleto> comprarBoleto(@RequestBody Boleto boleto) {
        Boleto nuevoBoleto = boletoService.crearBoleto(boleto);
        return ResponseEntity.ok(nuevoBoleto);
    }

    // Endpoint para obtener todos los boletos (puede ser útil para administración)
    @GetMapping
    public List<Boleto> obtenerTodosLosBoletos() {
        return boletoService.obtenerTodosLosBoletos();
    }

    // Endpoint para obtener un boleto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Boleto> obtenerBoletoPorId(@PathVariable Long id) {
        Optional<Boleto> boleto = boletoService.obtenerBoletoPorId(id);
        return boleto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint para obtener un itinerario por código de reserva (para usuarios no registrados)
    @GetMapping("/itinerario/{codigoReserva}")
    public ResponseEntity<Boleto> obtenerItinerarioPorCodigoReserva(@PathVariable String codigoReserva) {
        Optional<Boleto> boleto = boletoService.obtenerBoletoPorCodigoReserva(codigoReserva);
        return boleto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint para actualizar un boleto existente
    @PutMapping("/{id}")
    public ResponseEntity<Boleto> actualizarBoleto(@PathVariable Long id, @RequestBody Boleto boletoActualizado) {
        Optional<Boleto> boleto = boletoService.obtenerBoletoPorId(id);
        if (boleto.isPresent()) {
            boletoActualizado.setBoletoId(id);
            Boleto boletoGuardado = boletoService.actualizarBoleto(boletoActualizado);
            return ResponseEntity.ok(boletoGuardado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint para eliminar un boleto por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarBoleto(@PathVariable Long id) {
        if (boletoService.obtenerBoletoPorId(id).isPresent()) {
            boletoService.eliminarBoleto(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
