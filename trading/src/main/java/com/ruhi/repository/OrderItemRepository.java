package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.OrderItem;


public interface OrderItemRepository extends JpaRepository<OrderItem,Long>{

}
