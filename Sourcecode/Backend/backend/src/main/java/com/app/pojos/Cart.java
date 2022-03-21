package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"userId","productId"}))
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cartId;
	
	@OneToOne
	@JoinColumn(name="userId", nullable = false)
	private User user;
	
	@ManyToOne(fetch = FetchType.EAGER )
	@JoinColumn(name = "productId", nullable = false)
	@JsonIgnoreProperties("seller")
	private Product product;
	
	private int quantity;

	public Cart() {
		// TODO Auto-generated constructor stub
	}

	public Cart(Integer cartId, User user, Product product, int quantity) {
		super();
		this.cartId = cartId;
		this.user = user;
		this.product = product;
		this.quantity = quantity;
	}
	
	

	public Cart(User user, Product product, int quantity) {
		super();
		this.user = user;
		this.product = product;
		this.quantity = quantity;
	}

	public Integer getCartId() {
		return cartId;
	}

	public void setCartId(Integer cartId) {
		this.cartId = cartId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", user=" + user + ", product=" + product + ", quantity=" + quantity + "]";
	}
	
}
