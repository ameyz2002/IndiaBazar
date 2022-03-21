package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.pojos.Cart;
import com.app.pojos.Order;
import com.app.pojos.Product;

public interface ICustomerService {

	Cart addToCart(CartDTO cartDTO);
	void deleteFromCart(int cartId);
	
	List<Product> searchByProductName(String productName);
	List<Product> searchByCategoryId(int catId);
	
	List<Cart> cartItemsList(int customerId);
	
	String buyProduct(int cartId);
	List<Order> orderList(int customerId);
}
