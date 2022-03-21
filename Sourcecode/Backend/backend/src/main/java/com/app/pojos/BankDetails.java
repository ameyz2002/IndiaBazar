package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "user_bnk")
public class BankDetails {
//accId	userId	IFSCCode	accountNumber	holderName

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bnk_id")
	private Integer bankId;
	
	@Column(length = 30, nullable = false)
	private String ifscCode;
	
	@Column(length = 30, nullable = false)
	private String accNo;
	
	@Column(length = 30, nullable = false)
	private String holderName;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	@JsonIgnore
	@JsonIgnoreProperties("bankDetails")
	private User user;

	public BankDetails() {
	}

	

	public BankDetails(int bankId, String ifscCode, String accNo, String holderName) {
		super();
		this.bankId = bankId;
		this.ifscCode = ifscCode;
		this.accNo = accNo;
		this.holderName = holderName;
	}



	public int getBankId() {
		return bankId;
	}

	public void setBankId(int bankId) {
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "BankDetails [bankId=" + bankId + ", ifscCode=" + ifscCode + ", accNo=" + accNo + ", holderName="
				+ holderName + "]";
	}

	
	

}
