package com.api.TUniverso.utils;

import org.springframework.stereotype.Component;

import com.api.TUniverso.dto.UsuarioDTO;
import com.api.TUniverso.model.Usuario;

@Component
public class UsuarioMapper {
    public UsuarioDTO convertirAUsuarioDTO(Usuario usuario) {
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setUsuarioId(usuario.getId());
        usuarioDTO.setNombre(usuario.getNombre());
        usuarioDTO.setUsername(usuario.getUsername());
        usuarioDTO.setEmail(usuario.getEmail());
        usuarioDTO.setTipoUsuario(usuario.getTipoUsuario());
        usuarioDTO.setEstado(usuario.getEstado());
        return usuarioDTO;
    }

    public Usuario convertirAUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario();
        usuario.setId(usuarioDTO.getUsuarioId());
        usuario.setNombre(usuarioDTO.getNombre());
        usuario.setUsername(usuarioDTO.getUsername());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setTipoUsuario(usuarioDTO.getTipoUsuario());
        usuario.setEstado(usuarioDTO.getEstado());
        return usuario;
    }
}
