package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excs.UserHandlingException;
import com.app.dao.IAddressRepository;
import com.app.dao.IBankDetailsRepository;
import com.app.dao.IUserRepository;
import com.app.dto.AddressDTO;
import com.app.dto.BankDetailsDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.BankDetails;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private IUserRepository userRepo;
	
	@Autowired
	private IAddressRepository addressRepo;
	
	@Autowired
	private IBankDetailsRepository bankDetailsRepo;

	@Override
	public User getUserDetails(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password).orElseThrow(() -> new UserHandlingException("Invalid Credentials!!!!"));
	}

	@Override
	public User addUserDetails(UserDTO userDTO) {
		User user = new User();
		BeanUtils.copyProperties(userDTO, user);
		user.setRole(Role.CUSTOMER);
		user.setRegDate(LocalDate.now());
		System.out.println("add user source : " + userDTO);
		System.out.println(user);
		return userRepo.save(user);
	}

	@Override
	public User activateUser(int id) {
		User u = userRepo.findById(id).get();
		u.setActive(true);
		return u;
	}

	@Override
	public User getUserProfile(int id) {
		return userRepo.findById(id).get();
	}

	@Override
	public User updateUserDetails(int userId, UserDTO userDTO) {
		System.out.println("in update userDetails: "+userDTO);
		User userDetails = userRepo.findById(userId).get();
		System.out.println("user details from db: "+userDetails);
		BeanUtils.copyProperties(userDTO, userDetails,"userId","regDate","role","isActive");
		System.out.println("updated user details: "+userDetails);
		return userDetails;
	}

	
	@Override
	public List<Address> listOfAddress(int userId) {
		return addressRepo.getAllAddress(userId);
	}
	
	@Override
	public Address addAddressDetails(int userId, AddressDTO addressDTO) {
		addressDTO.setAddressId(0);
		System.out.println("in service method id : "+userId+" addressDTO: "+addressDTO);
		Address addressDetails = new Address();
		BeanUtils.copyProperties(addressDTO, addressDetails);
		System.out.println("add address source : " + addressDTO);
		System.out.println(addressDetails);
		User user = userRepo.findById(userId).get();
		addressDetails.setUser(user);
		Address newAddress = addressRepo.save(addressDetails);
		user.getAddress().add(newAddress);
		return newAddress;
	}

	@Override
	public List<BankDetails> listOfBankDetails(int userId) {
		return bankDetailsRepo.getAllBankDetails(userId);
	}

	
	@Override
	public BankDetails addBankDetails(int userId, BankDetailsDTO bankDeatilsDTO) {
		bankDeatilsDTO.setBankId(0);
		System.out.println("in service method id : "+userId+" bankDeatilsDTO: "+bankDeatilsDTO);
		BankDetails bankDetails = new BankDetails();
		BeanUtils.copyProperties(bankDeatilsDTO, bankDetails);
		System.out.println("add bank source : " + bankDeatilsDTO);
		System.out.println(bankDetails);
		User user = userRepo.findById(userId).get();
		bankDetails.setUser(user);
		BankDetails newBankDetails = bankDetailsRepo.save(bankDetails);
		user.getBankDetails().add(newBankDetails);
		return newBankDetails;
	}

	
}
