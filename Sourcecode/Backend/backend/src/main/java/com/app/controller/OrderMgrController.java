package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.service.IOrderMgrService;

@RestController
@CrossOrigin
@RequestMapping("/orderMgr")
public class OrderMgrController {
	
	@Autowired
	private IOrderMgrService orderMgrService;
	
	
	public OrderMgrController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/detailOrderList")
	public ResponseDTO<?> detailedOrderList() {
		System.out.println("in get all orders");
		return new ResponseDTO<>(HttpStatus.OK, "List of all orders fetched succesfully..!!",orderMgrService.detailProductList());
	}

	@PutMapping("/updateDeliveryDetails/{orderId}")
	public ResponseDTO<?> updateDeliveyDetails(@PathVariable int orderId, @RequestBody String deliveryDetails){
		System.out.println("in updateDeliveyDetails orderId : "+ orderId +" deliveryDetails : "+deliveryDetails);
		return new ResponseDTO<>(HttpStatus.OK, "Delivery Details updated successfully..!", orderMgrService.updateOrderDeliveryDetails(orderId, deliveryDetails));
	}
}
