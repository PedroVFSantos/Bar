package br.com.paulista.bar.api_gestao.controller;

import br.com.paulista.bar.api_gestao.model.Bingo;
import br.com.paulista.bar.api_gestao.repository.BingoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bingos")
@CrossOrigin(origins = "http://localhost:5173")
public class BingoController {

    @Autowired
    private BingoRepository repository;


    @GetMapping
    public List<Bingo> listarTodos() {
        return repository.findAll();
    }


    @PostMapping
    public Bingo criarOuAtualizar(@RequestBody Bingo bingo) {

        return repository.save(bingo);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}