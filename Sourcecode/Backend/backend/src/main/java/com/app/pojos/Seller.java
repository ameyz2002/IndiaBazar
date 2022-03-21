package com.app.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "seller")
public class Seller {
//sellerId	brand_name	contact	address

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "seller_id")
	private Integer sellerId;
	
	@Column(length = 40, nullable = false)
	private String brandName;
	
	@Column(length = 15, nullable = false)
	private String contact;
	
	@Column(length = 50, nullable = false)
	private String address;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "seller", orphanRemoval = true)
	@JsonIgnoreProperties("seller")
	@JsonIgnore
	private List<Product> products;
	
	public Seller() {
		System.out.println("in seller constr ");
	}

	public Seller(int sellerId, String brandName, String contact, String address) {
		super();
		this.sellerId = sellerId;
		this.brandName = brandName;
		this.contact = contact;
		this.address = address;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(Integer sellerId) {
		this.sellerId = sellerId;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	
	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	
	

	@Override
	public String toString() {
		return "Seller [sellerId=" + sellerId + ", brandName=" + brandName + ", contact=" + contact + ", address="
				+ address + "]";
	}
	
	
}
