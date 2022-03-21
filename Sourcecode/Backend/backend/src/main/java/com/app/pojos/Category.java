package com.app.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "categories")
public class Category {
//categoryId	name	description	picture

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer categoryId;
	
	@Column(length = 20)
	private String catName;
	
	@Column(length = 150)
	private String description;
	
	@Lob
	private byte[] picture;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category", orphanRemoval = true)
	@JsonIgnoreProperties("category")
	@JsonIgnore
	private List<Product> products;
	
	public Category() {
		// TODO Auto-generated constructor stub
	}

	public Category(Integer categoryId, String catName, String description, byte[] picture) {
		super();
		this.categoryId = categoryId;
		this.catName = catName;
		this.description = description;
		this.picture = picture;
	}
	

	public Category(Integer categoryId, String catName, String description, byte[] picture, List<Product> products) {
		super();
		this.categoryId = categoryId;
		this.catName = catName;
		this.description = description;
		this.picture = picture;
		this.products = products;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}
	

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", catName=" + catName + ", description=" + description + "]";
	}
	
	
}
