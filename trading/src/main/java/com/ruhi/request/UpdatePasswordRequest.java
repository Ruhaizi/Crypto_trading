package com.ruhi.request;

import com.ruhi.domain.VerificationType;

import lombok.Data;

@Data
public class UpdatePasswordRequest {
	
	 private String sendTo;
	 private VerificationType verificationType;
	

}
