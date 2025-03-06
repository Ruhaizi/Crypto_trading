package com.ruhi.service;

import java.util.List;

import com.ruhi.model.User;
import com.ruhi.model.Withdrawal;

public interface WithdrawalService {

	  Withdrawal requestWithdrawal(Long amount,User user);
	    Withdrawal procedWithdrawal(Long withdrawalId,boolean accept) throws Exception;
	    List<Withdrawal> getUsersWithdrawalHistory(User user);
	    List<Withdrawal> getAllWithdrawalRequest();
}
