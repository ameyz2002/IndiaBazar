package com.app.service;

import java.util.List;

import com.app.dto.AddressDTO;
import com.app.dto.BankDetailsDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.BankDetails;
import com.app.pojos.User;

public interface IUserService {

	User getUserDetails(String email, String password);
	
	User addUserDetails(UserDTO userDTO);
	
	User activateUser(int id);
	
	User getUserProfile(int id);
	User updateUserDetails(int userId,UserDTO userDTO);
	
	List<Address> listOfAddress(int userId);
	Address addAddressDetails(int userId, AddressDTO addressDTO);
	
	List<BankDetails> listOfBankDetails(int userId);
	BankDetails addBankDetails(int userId, BankDetailsDTO bankDeatilsDTO);
}
