package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.VerificationCode;


public interface VerificationRepository extends JpaRepository<VerificationCode,Long> {
	
	VerificationCode findByUserId(Long userId);

}
