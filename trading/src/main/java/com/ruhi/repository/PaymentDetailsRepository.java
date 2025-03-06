package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.PaymentDetails;


public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails,Long> {
	
	 PaymentDetails getPaymentDetailsByUserId(Long userId);

}
