package com.ruhi.request;

import com.ruhi.domain.OrderType;

import lombok.Data;

@Data
public class CreateOrderRequest {
	private String coinId;
    private double quantity;
    private OrderType orderType;

}
