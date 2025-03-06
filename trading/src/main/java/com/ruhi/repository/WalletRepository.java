package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.Wallet;


public interface WalletRepository extends JpaRepository<Wallet,Long>{

	
	 public Wallet findByUserId(Long userId);
}
