package br.com.paulista.bar.api_gestao.repository;

import br.com.paulista.bar.api_gestao.model.Bingo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BingoRepository extends JpaRepository<Bingo, Long> {
    
}