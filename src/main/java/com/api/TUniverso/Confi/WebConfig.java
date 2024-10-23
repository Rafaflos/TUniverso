package com.api.TUniverso.Confi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Permitir todas las rutas que empiecen por /api/
                .allowedOrigins("http://localhost:3002") // Permitir el origen de tu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permitir métodos HTTP
                .allowedHeaders("*") // Permitir cualquier header
                .allowCredentials(true); // Permitir credenciales
    }
}
