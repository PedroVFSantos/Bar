package br.com.paulista.bar.api_gestao;

import br.com.paulista.bar.api_gestao.model.Bingo;
import br.com.paulista.bar.api_gestao.model.Produto;
import br.com.paulista.bar.api_gestao.repository.BingoRepository;
import br.com.paulista.bar.api_gestao.repository.ProdutoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiGestaoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGestaoApplication.class, args);
	}

	// Este trecho será executado assim que a aplicação iniciar
	@Bean
	CommandLineRunner initDatabase(ProdutoRepository produtoRepository, BingoRepository bingoRepository) {
		return args -> {
			// Limpa o banco de dados antes de adicionar novos dados (opcional)
			produtoRepository.deleteAll();
			bingoRepository.deleteAll();

			// Cria e salva um produto de exemplo
			Produto p1 = new Produto();
			p1.setNome("Porção de Fritas com Bacon");
			p1.setPreco(35.50);
			p1.setQuantidadeEstoque(50);
			produtoRepository.save(p1);

			// Cria e salva um bingo de exemplo
			Bingo b1 = new Bingo();
			b1.setDescricao("Bingo Especial de Sábado!");
			// URL de exemplo para um gerador de QR Code
			b1.setQrCodeUrl("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BINGO-SABADO-12345");
			bingoRepository.save(b1);
		};
	}
}