package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.ForgotPasswordToken;



public interface ForgotPasswordRepository extends JpaRepository<ForgotPasswordToken,String> {
	
	 ForgotPasswordToken findByUserId(Long userId);

}
