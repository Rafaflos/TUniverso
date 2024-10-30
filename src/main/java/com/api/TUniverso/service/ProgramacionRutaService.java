package com.api.TUniverso.service;

import com.api.TUniverso.Model.ProgramacionRuta;
import com.api.TUniverso.repository.ProgramacionRutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgramacionRutaService {

    @Autowired
    private ProgramacionRutaRepository programacionRutaRepository;

    public List<ProgramacionRuta> obtenerTodasLasProgramaciones() {
        return programacionRutaRepository.findAll();
    }

    public Optional<ProgramacionRuta> obtenerProgramacionPorId(Long id) {
        return programacionRutaRepository.findById(id);
    }

    public ProgramacionRuta guardarProgramacion(ProgramacionRuta programacionRuta) {
        return programacionRutaRepository.save(programacionRuta);
    }

    public void eliminarProgramacion(Long id) {
        programacionRutaRepository.deleteById(id);
    }
}
