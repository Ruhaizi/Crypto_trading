package com.ruhi.service;

import com.razorpay.RazorpayException;
import com.ruhi.domain.PaymentMethod;
import com.ruhi.model.PaymentOrder;
import com.ruhi.model.User;
import com.ruhi.response.PaymentResponse;
import com.stripe.exception.StripeException;


public interface PaymentService {

    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean ProccedPaymentOrder (PaymentOrder paymentOrder,
                                 String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLink(User user,
                                              Long Amount,
                                              Long orderId) throws RazorpayException;

    PaymentResponse createStripePaymentLink(User user, Long Amount,
                                            Long orderId) throws StripeException;
}
