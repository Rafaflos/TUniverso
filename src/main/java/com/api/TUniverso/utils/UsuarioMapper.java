package com.api.TUniverso.utils;

import org.springframework.stereotype.Component;
import com.api.TUniverso.dto.UsuarioDTO;
import com.api.TUniverso.model.Usuario;

@Component
public class UsuarioMapper {
    public UsuarioDTO convertirAUsuarioDTO(Usuario usuario) {
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setUsuarioid(usuario.getId());
        usuarioDTO.setNombre(usuario.getNombre());
        usuarioDTO.setEmail(usuario.getEmail());
        usuarioDTO.setContraseña(usuario.getContraseña());
        usuarioDTO.setUsuario(usuario.getUsuario());
        usuarioDTO.setTipoUsuario(usuario.getTipoUsuario());
        usuarioDTO.setEstado(usuario.getEstado());
        // No incluimos roles ya que no están en UsuarioDTO
        return usuarioDTO;
    }

    public Usuario convertirAUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario();
        usuario.setId(usuarioDTO.getUsuarioid());
        usuario.setNombre(usuarioDTO.getNombre());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setContraseña(usuarioDTO.getContraseña());
        usuario.setUsuario(usuarioDTO.getUsuario());
        usuario.setTipoUsuario(usuarioDTO.getTipoUsuario());
        usuario.setEstado(usuarioDTO.getEstado());
        // No incluimos roles ya que no están en UsuarioDTO
        return usuario;
    }
}
