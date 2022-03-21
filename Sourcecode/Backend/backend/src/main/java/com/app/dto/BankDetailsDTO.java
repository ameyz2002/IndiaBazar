package com.app.dto;

import java.util.List;

import javax.persistence.Column;

import com.app.pojos.BankDetails;

public class BankDetailsDTO {
	private Integer bankId;
	private String ifscCode;
	private String accNo;
	private String holderName;
	
	public BankDetailsDTO() {
		// TODO Auto-generated constructor stub
	}

	public BankDetailsDTO(Integer bankId, String ifscCode, String accNo, String holderName) {
		super();
		this.bankId = bankId;
		this.ifscCode = ifscCode;
		this.accNo = accNo;
		this.holderName = holderName;
	}

	public Integer getBankId() {
		return bankId;
	}

	public void setBankId(Integer bankId) {
		this.bankId = bankId;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getAccNo() {
		return accNo;
	}

	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}

	public String getHolderName() {
		return holderName;
	}

	public void setHolderName(String holderName) {
		this.holderName = holderName;
	}

	@Override
	public String toString() {
		return "BankDetailsDTO [bankId=" + bankId + ", ifscCode=" + ifscCode + ", accNo=" + accNo + ", holderName="
				+ holderName + "]";
	}
	
}
