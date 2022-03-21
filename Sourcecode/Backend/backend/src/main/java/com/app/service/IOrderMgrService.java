package com.app.service;

import java.util.List;

import com.app.pojos.Order;

public interface IOrderMgrService {
	List<Order> detailProductList();
	Order updateOrderDeliveryDetails(int orderId, String deliveryDetails);
}
