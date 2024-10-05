package com.api.TUniverso.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserDetailsServiceImpl userDetailsService;
    private final CustomAuthenticationEntryPoint customAuthenticationEntryPoint;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService, CustomAuthenticationEntryPoint customAuthenticationEntryPoint) {
        this.userDetailsService = userDetailsService;
        this.customAuthenticationEntryPoint = customAuthenticationEntryPoint;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Desactiva CSRF (para APIs)
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/api/public/**").permitAll() // Rutas públicas
                        .anyRequest().authenticated() // Rutas protegidas
                )
                .exceptionHandling()
                .authenticationEntryPoint(customAuthenticationEntryPoint) // Manejo de errores de autenticación
                .and()
                .addFilterBefore(new JWTAuthenticationFilter(authenticationManager(http.getSharedObject(AuthenticationConfiguration.class))), UsernamePasswordAuthenticationFilter.class) // Filtro JWT
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS); // Sin estado
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    // Este método no es necesario ya que la configuración de AuthenticationManager ya está en el método anterior
    // Puedes eliminarlo
    // @Bean
    // public void authenticationManager(AuthenticationManagerBuilder auth) throws Exception {
    //     auth.userDetailsService(userDetailsService);
    // }
}
