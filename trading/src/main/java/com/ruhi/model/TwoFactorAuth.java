package com.ruhi.model;

import com.ruhi.domain.VerificationType;

import lombok.Data;

@Data
public class TwoFactorAuth {
	private boolean isEnabled = false;
	private VerificationType sendTo;

}
