package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.PaymentOrder;


public interface PaymentOrderRepository extends JpaRepository<PaymentOrder,Long> {

}
