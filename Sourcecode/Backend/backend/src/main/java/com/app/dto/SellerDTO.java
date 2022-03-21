package com.app.dto;

public class SellerDTO {
	private int sellerId;
	private String brandName;
	private String contact;
	private String address;

	
	public SellerDTO() {
		System.out.println("in sellerDTO ");
	}


	public SellerDTO(int sellerId, String brandName, String contact, String address) {
		super();
		this.sellerId = sellerId;
		this.brandName = brandName;
		this.contact = contact;
		this.address = address;
	}


	public int getSellerId() {
		return sellerId;
	}


	public void setSellerId(int sellerId) {
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


	@Override
	public String toString() {
		return "SellerDTO [sellerId=" + sellerId + ", brandName=" + brandName + ", contact=" + contact + ", address="
				+ address + "]";
	}
	
	
}
