package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.ResponseDTO;
import com.app.service.ICustomerService;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private ICustomerService customerService;
	
	public CustomerController() {
		System.out.println("in ctor of " + getClass().getName());
	}
	
	@GetMapping("/searchProductByName/{productName}")
	public ResponseDTO<?> searchProductByName(@PathVariable String productName) {
		System.out.println("in searchProductByName " +productName);
		return new ResponseDTO<>(HttpStatus.OK, "Product fetched succesfully..!!", customerService.searchByProductName(productName));
	}
	
	@GetMapping("/searchProductByCategory/{categoryId}")
	public ResponseDTO<?> searchProductByCategory(@PathVariable int categoryId) {
		System.out.println("in searchProductByCategory " +categoryId);
		return new ResponseDTO<>(HttpStatus.OK, "Product fetched succesfully..!!", customerService.searchByCategoryId(categoryId));
	}
	
	
	@PostMapping("/addToCart")
	public ResponseDTO<?> addToCart(@RequestBody CartDTO cartDTO){
		try {
			System.out.println("in addToCart "+cartDTO);
			return new ResponseDTO<>(HttpStatus.OK, "Product added Successfully in Cart..!!", customerService.addToCart(cartDTO));
		} catch (RuntimeException e) {
			System.out.println("err in addToCart " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Addition to cart failed", null);
		}
	}
	
	@DeleteMapping("/deleteFromCart/{cartId}")
	public ResponseDTO<?> deleteFromCart(@PathVariable int cartId) {
		System.out.println("in del cartItem: " + cartId);
		try {
			customerService.deleteFromCart(cartId);
			return new ResponseDTO<>(HttpStatus.OK, "CartItem deleted successful..!!", null);
		}catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "CartItem deletion failed", null);
		}
	}
	
	@GetMapping("/cartItemList/{customerId}")
	public ResponseDTO<?> cartItemList(@PathVariable int customerId) {
		System.out.println("in cartItemList " +customerId);
		return new ResponseDTO<>(HttpStatus.OK, "Cart Item list fetched successfully..!!", customerService.cartItemsList(customerId));
	}
	
	@PostMapping("/placeOrder/{cartId}")
	public ResponseDTO<?> placeOrder(@PathVariable int cartId) {
		try {
			System.out.println("in placeOrder "+cartId);
			return new ResponseDTO<>(HttpStatus.OK, " ", customerService.buyProduct(cartId));
		} catch (RuntimeException e) {
			System.out.println("err in placeOrder " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to place order..!", null);
		}
	}
	
	@GetMapping("/orderList/{userId}")
	public ResponseDTO<?> listOfOrders(@PathVariable int userId) {
		System.out.println("in listOfOrders " +userId);
		return new ResponseDTO<>(HttpStatus.OK, "Order list fetched successfully..!!", customerService.orderList(userId));
	}
}
