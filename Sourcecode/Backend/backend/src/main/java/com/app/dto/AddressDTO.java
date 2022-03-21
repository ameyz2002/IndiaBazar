package com.app.dto;

import java.util.List;

import javax.persistence.Column;

import com.app.pojos.Address;

public class AddressDTO {
	private Integer addressId;
	private String area;
	private String city;
	private String state;
	private String country;
	private String pinCode;
	private String mobile;
	
	public AddressDTO() {
		// TODO Auto-generated constructor stub
	}

	public AddressDTO(Integer addressId, String area, String city, String state, String country, String pinCode,
			String mobile) {
		super();
		this.addressId = addressId;
		this.area = area;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;
		this.mobile = mobile;
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "AddressDTO [addressId=" + addressId + ", area=" + area + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", pinCode=" + pinCode + ", mobile=" + mobile + "]";
	}
	
	
}
