package br.com.paulista.bar.api_gestao.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Desabilita o CSRF para simplificar a comunicação com o React
                .authorizeHttpRequests(auth -> auth
                        // Permite que TODOS vejam os produtos e bingos (método GET)
                        .requestMatchers(HttpMethod.GET, "/api/produtos/**", "/api/bingos/**").permitAll()
                        // Exige que o usuário seja ADMIN para qualquer outro método (POST, PUT, DELETE)
                        .requestMatchers("/api/produtos/**", "/api/bingos/**").hasRole("ADMIN")
                        // Qualquer outra requisição precisa de autenticação
                        .anyRequest().authenticated()
                )
                .httpBasic(withDefaults()); // Usa autenticação básica (usuário e senha)
        return http.build();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        // Cria um usuário 'admin' com a senha 'admin123' em memória para teste
        UserDetails user = User.withUsername("admin")
                .password(passwordEncoder().encode("admin123"))
                .roles("ADMIN")
                .build();
        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}