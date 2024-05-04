package br.com.descomplica.projetoUm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.descomplica.projetoUm.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {

}
