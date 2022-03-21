package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IOrderRepository;
import com.app.pojos.Order;

@Service
@Transactional
public class OrderMgrServiceImpl implements IOrderMgrService {
	
	@Autowired
	private IOrderRepository orderRepo;

	@Override
	public List<Order> detailProductList() {
		return orderRepo.findAll();
	}

	@Override
	public Order updateOrderDeliveryDetails(int orderId, String deliveryDetails) {
		Order order = orderRepo.findById(orderId).get();
		order.setDeliveryDetails(deliveryDetails);
		return orderRepo.save(order);
	}

	

	

}
