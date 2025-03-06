package com.ruhi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.Wallet;
import com.ruhi.model.WalletTransaction;


public interface WalletTransactionRepository extends JpaRepository<WalletTransaction,Long>{
	
	  List<WalletTransaction> findByWalletOrderByDateDesc(Wallet wallet);


}
