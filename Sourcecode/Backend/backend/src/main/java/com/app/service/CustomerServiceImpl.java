package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ICartRepository;
import com.app.dao.IOrderRepository;
import com.app.dao.IProductRepository;
import com.app.dao.IUserRepository;
import com.app.dto.CartDTO;
import com.app.pojos.Cart;
import com.app.pojos.Order;
import com.app.pojos.Product;
import com.app.pojos.User;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	private IProductRepository productRepo;

	@Autowired
	private IUserRepository userRepo;

	@Autowired
	private ICartRepository cartRepo;

	@Autowired
	private IOrderRepository orderRepo;

	@Override
	public List<Product> searchByProductName(String productName) {
		return productRepo.searchByProductNameLike(productName);
	}

	@Override
	public List<Product> searchByCategoryId(int catId) {
		return productRepo.searchBycategoryId(catId);
	}

	@Override
	public Cart addToCart(CartDTO cartDTO) {
		System.out.println("in addToCart : " + cartDTO);
//		User user = userRepo.findById(cartDTO.getUserId()).get();
//		Product product = productRepo.findProductById(cartDTO.getProductId()).get();
//		
//		Cart cartDetails = new Cart();
//		cartDetails.setQuantity(cartDTO.getQuantity());
//		cartDetails.setUser(user);
//		cartDetails.setProduct(product);
//		Cart newCart = cartRepo.save(cartDetails);
//		System.out.println("newCart : "+newCart);
//		product.getCart().add(newCart);
//		return newCart;

		Cart cart = new Cart();
		try {
			cart = cartRepo.searchByUserIdAndProductId(cartDTO.getUserId(), cartDTO.getProductId()).get();
			cart.setQuantity(cart.getQuantity() + cartDTO.getQuantity());
		} catch (RuntimeException e) {
			System.out.println("No cart found");
			User user = userRepo.findById(cartDTO.getUserId()).get();
			Product product = productRepo.findProductById(cartDTO.getProductId()).get();
			cart.setQuantity(cartDTO.getQuantity());
			cart.setUser(user);
			cart.setProduct(product);

		}

		return cartRepo.save(cart);
	}

	@Override
	public void deleteFromCart(int cartId) {
		boolean exists = cartRepo.existsById(cartId);
		if (!exists)
			throw new ResourceNotFoundException("Invalid cart id..!!");
		cartRepo.deleteById(cartId);

	}

	@Override
	public List<Cart> cartItemsList(int customerId) {
		return cartRepo.searchByUserId(customerId);
	}

	@Override
	public String buyProduct(int cartId) {
		System.out.println("buyProduct : " + cartId);
		Cart cart = cartRepo.findById(cartId).get();
		Product product = cart.getProduct();
		if (product.getQuantity() > cart.getQuantity()) {
			Order order = new Order();
			order.setUser(cart.getUser());
			order.setProduct(product);
			order.setQuantity(cart.getQuantity());
			order.setPrice(product.getPrice());
			double total = product.getPrice() * cart.getQuantity()
					* (100 - ((product.getDiscount() == null) ? 0 : product.getDiscount())) / 100;
			order.setTotalPrice(total);
			order.setOrderDate(LocalDate.now());
			orderRepo.save(order);
			cartRepo.deleteById(cartId);
			product.setQuantity(product.getQuantity() - cart.getQuantity());
			return "Order Placed Successfully";
		}else
			return "Order failed.! Stock is Insufficient..!";
		
	}

	@Override
	public List<Order> orderList(int customerId) {
		return orderRepo.orderList(customerId);
	}

}
