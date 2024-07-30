package br.com.descomplica.projetoUm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.descomplica.projetoUm.entity.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido,Integer> {

}
