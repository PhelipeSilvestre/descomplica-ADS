package br.com.descomplica.projetoUm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.descomplica.projetoUm.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto,Integer> {

}
