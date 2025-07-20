package br.com.paulista.bar.api_gestao.repository;

import br.com.paulista.bar.api_gestao.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}