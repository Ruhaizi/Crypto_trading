package com.ruhi.service;

import com.ruhi.domain.VerificationType;
import com.ruhi.model.ForgotPasswordToken;
import com.ruhi.model.User;


public interface ForgotPasswordService {

    ForgotPasswordToken createToken(User user, String id, String otp,
                                    VerificationType verificationType,String sendTo);

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);

    boolean verifyToken(ForgotPasswordToken token,String otp);
}
