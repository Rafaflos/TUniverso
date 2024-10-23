package com.api.TUniverso.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/modulo")
public class ejem {


    @GetMapping("/ping")
    public String ping() {
        return "Servidor levantado";
    }

}

