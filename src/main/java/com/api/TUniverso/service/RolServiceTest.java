package com.api.TUniverso.service;

import com.api.TUniverso.Model.Rol;
import com.api.TUniverso.repository.RolRepository;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.testng.annotations.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class RolServiceTest {

    @InjectMocks
    private RolService rolService;

    @Mock
    private RolRepository rolRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindByNombre() {
        String nombre = "ROLE_USER";
        Rol rol = new Rol(nombre);

        when(rolRepository.findByNombre(nombre)).thenReturn(Optional.of(rol));

        Optional<Rol> resultado = rolService.findByNombre(nombre);
        assertTrue(resultado.isPresent());
        assertEquals(nombre, resultado.get().getNombre());
    }
}
