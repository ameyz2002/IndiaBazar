package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "users")
public class User {
	// fName lName email password mobile role regDate picture
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;

	@Column(length = 30, nullable = false)
	private String firstName;

	@Column(length = 30, nullable = false)
	private String lastName;

	@Column(length = 50, unique = true, nullable = false)
	private String email;

	@Column(length = 20, nullable = false)
	@JsonIgnore
	private String password;

	@Column(length = 15, nullable = false)
	private String mobile;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate regDate;

	@Enumerated(EnumType.STRING)
	@Column(length = 10, nullable = false)
	private Role role;


	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
	@JsonIgnoreProperties("user")
	@JsonIgnore
	private List<Address> address;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
	@JsonIgnoreProperties("user")
	@JsonIgnore
	private List<BankDetails> bankDetails;
	
//	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = false)
//	@JsonIgnore
//	private Cart cart;
	
	private boolean isActive = false;

	public User() {
		System.out.println("in user constr ");
	}

	
	public User(Integer userId, String firstName, String lastName, String email, String password, String mobile,
			LocalDate regDate, Role role, boolean isActive) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.regDate = regDate;
		this.role = role;
		this.isActive = isActive;
	}


	public int getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public LocalDate getRegDate() {
		return regDate;
	}

	public void setRegDate(LocalDate regDate) {
		this.regDate = regDate;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}


	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
	}

	public List<BankDetails> getBankDetails() {
		return bankDetails;
	}

	public void setBankDetails(List<BankDetails> bankDetails) {
		this.bankDetails = bankDetails;
	}
	
//	public Cart getCart() {
//		return cart;
//	}
//
//
//	public void setCart(Cart cart) {
//		this.cart = cart;
//	}


	public boolean isActive() {
		return isActive;
	}


	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}


	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", mobile=" + mobile + ", regDate=" + regDate + ", role=" + role
				+ ", isActive=" + isActive + "]";
	}


	

	
}
