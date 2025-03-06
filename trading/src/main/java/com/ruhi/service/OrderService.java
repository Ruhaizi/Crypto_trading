package com.ruhi.service;

import java.util.List;

import com.ruhi.domain.OrderType;
import com.ruhi.model.Coin;
import com.ruhi.model.Order;
import com.ruhi.model.OrderItem;
import com.ruhi.model.User;


public interface OrderService {

    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId);

    List<Order> getAllOrdersForUser(Long userId, String orderType,String assetSymbol);

    void cancelOrder(Long orderId);

//    Order buyAsset(CreateOrderRequest req, Long userId, String jwt) throws Exception;

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;

//    Order sellAsset(CreateOrderRequest req,Long userId,String jwt) throws Exception;


}
