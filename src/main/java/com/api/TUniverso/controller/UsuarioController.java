package com.api.TUniverso.controller;

import com.api.TUniverso.dto.UsuarioDTO;
import com.api.TUniverso.service.UsuarioService;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/api/usuarios")
public class UsuarioController extends HttpServlet {
    private UsuarioService usuarioService;

    @Override
    public void init() throws ServletException {
        usuarioService = new UsuarioService();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Leer el cuerpo de la solicitud (JSON)
        StringBuilder jsonBuffer = new StringBuilder();
        try (BufferedReader reader = req.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                jsonBuffer.append(line);
            }
        }

        // Convertir JSON a UsuarioDTO
        ObjectMapper mapper = new ObjectMapper();
        UsuarioDTO usuarioDTO = mapper.readValue(jsonBuffer.toString(), UsuarioDTO.class);

        // Llamar al servicio para registrar al usuario
        boolean registrado = usuarioService.registrarUsuario(usuarioDTO);

        // Responder al cliente
        if (registrado) {
            resp.setStatus(HttpServletResponse.SC_CREATED);
            resp.getWriter().write("{\"message\":\"Usuario registrado exitosamente\"}");
        } else {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"message\":\"Error al registrar el usuario\"}");
        }
    }
}
