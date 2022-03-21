package com.app.dto;

import java.util.Arrays;

import com.app.pojos.Seller;

public class ProductSellerDTO {
	private Integer productId;
	private String productName;
	private String description;
	private double price;
	private Integer quantity;
	private Double discount;
	private Double avgRating;
	private byte[] picture;
	private boolean isapproved = false;
	private Seller seller;
	
	public ProductSellerDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public ProductSellerDTO(Integer productId, String productName, String description, double price, Integer quantity,
			Double discount, Double avgRating, byte[] picture, boolean isapproved, Seller seller) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.discount = discount;
		this.avgRating = avgRating;
		this.picture = picture;
		this.isapproved = isapproved;
		this.seller = seller;
	}







	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(Double avgRating) {
		this.avgRating = avgRating;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public boolean isIsapproved() {
		return isapproved;
	}

	public void setIsapproved(boolean isapproved) {
		this.isapproved = isapproved;
	}
	

	public Seller getSeller() {
		return seller;
	}



	public void setSeller(Seller seller) {
		this.seller = seller;
	}



	@Override
	public String toString() {
		return "ProductDTO [productId=" + productId + ", productName=" + productName + ", description=" + description
				+ ", price=" + price + ", quantity=" + quantity + ", discount=" + discount + ", avgRating=" + avgRating
				+ ", picture=" + Arrays.toString(picture) + ", isapproved=" + isapproved + "]";
	}
	
}
