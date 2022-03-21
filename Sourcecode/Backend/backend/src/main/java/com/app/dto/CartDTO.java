package com.app.dto;

public class CartDTO {
	private Integer cartId;
	private Integer userId;
	private Integer productId;
	private int quantity;
	
	public CartDTO() {
		// TODO Auto-generated constructor stub
	}

	public CartDTO(Integer cartId, Integer userId, Integer productId, int quantity) {
		super();
		this.cartId = cartId;
		this.userId = userId;
		this.productId = productId;
		this.quantity = quantity;
	}

	public Integer getCartId() {
		return cartId;
	}

	public void setCartId(Integer cartId) {
		this.cartId = cartId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "CartDTO [cartId=" + cartId + ", userId=" + userId + ", productId=" + productId + ", quantity="
				+ quantity + "]";
	}
	
}
