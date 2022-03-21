package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "orders")
public class Order {
//orderId	userId	productId	price	quantity	orderDate	paymentType	deliveryDetails

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderId;
	
	@OneToOne
	@JoinColumn(name="userId", nullable = false)
	private User user;
	
	@OneToOne
	@JoinColumn(name = "productId", nullable = false)
	@JsonIgnoreProperties("seller")
	private Product product;
	
	private double price;
	
	private Integer quantity;
	
	private double totalPrice;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate orderDate;
	
	@Column(length = 200)
	private String deliveryDetails;
	
	public Order() {
		// TODO Auto-generated constructor stub
	}

	public Order(Integer orderId, double price, Integer quantity, double totalPrice, LocalDate orderDate,
			String deliveryDetails) {
		super();
		this.orderId = orderId;
		this.price = price;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.orderDate = orderDate;
		this.deliveryDetails = deliveryDetails;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
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

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public String getDeliveryDetails() {
		return deliveryDetails;
	}

	public void setDeliveryDetails(String deliveryDetails) {
		this.deliveryDetails = deliveryDetails;
	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", price=" + price + ", quantity=" + quantity + ", totalPrice="
				+ totalPrice + ", orderDate=" + orderDate + ", deliveryDetails=" + deliveryDetails + "]";
	}
	
	
	
}
