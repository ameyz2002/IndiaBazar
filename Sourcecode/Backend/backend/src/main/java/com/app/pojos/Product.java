package com.app.pojos;

import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "products")

public class Product {
//productId	categoryId	name	description	sellerId	quantity	price	discount	picture	avgRating

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer productId;

	@Column(length = 30, nullable = false)
	private String productName;

	@Column(length = 200)
	private String description;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id", nullable = false)
	@JsonIgnore
	private Category category;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "seller_id", nullable = false)
	private Seller seller;
	
	private double price;
	
	private Integer quantity;
	
	private Double discount;

	
	private Double avgRating;
	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "product", orphanRemoval = true)
//	@JsonIgnore
//	private List<Cart> cart;
	
	@Lob
	private byte[] picture;
	
	private boolean isapproved = false;
	
	public Product() {
		System.out.println("in product constr");
	}

	

	public Product(Integer productId, String productName, String description, double price, Integer quantity,
			Double discount, Double avgRating, byte[] picture, boolean isapproved) {
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Seller getSeller() {
		return seller;
	}
	//@JsonProperty
	public void setSeller(Seller seller) {
		this.seller = seller;
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

//	public List<Cart> getCart() {
//		return cart;
//	}
//
//	public void setCart(List<Cart> cart) {
//		this.cart = cart;
//	}



	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", description=" + description
				+ ", price=" + price + ", quantity=" + quantity + ", discount=" + discount + ", avgRating=" + avgRating
				+ ", picture=" + Arrays.toString(picture) + ", isapproved=" + isapproved + "]";
	}



	
	
	
}
