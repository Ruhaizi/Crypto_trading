package com.ruhi.service;

import java.util.List;

import com.ruhi.domain.WalletTransactionType;
import com.ruhi.model.Wallet;
import com.ruhi.model.WalletTransaction;


public interface WalletTransactionService {
	
	 WalletTransaction createTransaction(Wallet wallet,
             WalletTransactionType type,
             String transferId,
             String purpose,
             Long amount
);

List<WalletTransaction> getTransactions(Wallet wallet, WalletTransactionType type);

}
