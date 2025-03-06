package com.ruhi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
	
	 public List<Order>findByUserId(Long userId);

}
