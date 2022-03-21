package com.app.controller;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddressDTO;
import com.app.dto.BankDetailsDTO;
import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.dto.UserDTO;
import com.app.pojos.User;
import com.app.service.EmailServiceImpl;
import com.app.service.IUserService;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private EmailServiceImpl emailService;
	
	public UserController() {
		System.out.println("in ctor of " + getClass().getName());
	}

	@PostMapping("/signin")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest request) {
		try {
			System.out.println("in auth " + request);
			return new ResponseDTO<>(HttpStatus.OK, "Authentication Successful..!", userService.getUserDetails(request.getEmail(), request.getPassword()));
		}catch (RuntimeException e) {
			System.out.println("err in signin " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "SignIn failed", null);
		}
		
	}
	
	@PostMapping("/register")
	public ResponseDTO<?> registerUser(@RequestBody UserDTO userDTO) {
		System.out.println("in registerUser "+userDTO);
		User u = userService.addUserDetails(userDTO);
		if(u != null) {
			try {
				emailService.sendMail(u);
			} catch (MessagingException e) {
				e.printStackTrace();
				return new ResponseDTO<>(HttpStatus.BAD_REQUEST, "Failed to send activation mail..!", null);
			}
		}
		return new ResponseDTO<>(HttpStatus.OK, "Activation mail sent Successfully..Please activate your account through Gmail..",u );
		
	}
	
	@GetMapping("/activate/{id}")
	public ResponseDTO<?> activate(@PathVariable int id) {
		System.out.println("in activate User "+id);
		User u = userService.activateUser(id);
		System.out.println("user activated "+u);
		return new ResponseDTO<>(HttpStatus.OK, "User activated successfully..!!",null );
	}
	
	@GetMapping("/getProfile/{id}")
	public ResponseDTO<?> getProfile(@PathVariable int id) {
		System.out.println("in get user profile "+id);
		return new ResponseDTO<>(HttpStatus.OK, "Profile fetched successfully..!!", userService.getUserProfile(id));
	}
	
	@PutMapping("/updateProfile/{id}")
	public ResponseDTO<?> updateProfile(@PathVariable int id, @RequestBody UserDTO userDTO) {
		System.out.println("in updateProfile: deatils: "+ id +"expected changes: "+userDTO);
		return new ResponseDTO<>(HttpStatus.OK, "User profile updated successfully..!", userService.updateUserDetails(id, userDTO));
	}
	
	@PostMapping("/addAddress/{id}")
	public ResponseDTO<?> addAddressDetails(@PathVariable int id, @RequestBody AddressDTO addressDTO) {
		System.out.println("in addAddressDetails: "+ id +"expected changes: "+addressDTO);
		return new ResponseDTO<>(HttpStatus.OK, "Address added successfully..!", userService.addAddressDetails(id, addressDTO));
	}
	
	@GetMapping("/addressList/{id}")
	public ResponseDTO<?> getAddress(@PathVariable int id) {
		System.out.println("in get user addresses "+id);
		return new ResponseDTO<>(HttpStatus.OK, "List of addresses fetched successfully..!!", userService.listOfAddress(id));
	}
	
	@PostMapping("/addBank/{id}")
	public ResponseDTO<?> addBankDetails(@PathVariable int id, @RequestBody BankDetailsDTO bankDetailsDTO) {
		System.out.println("in addBankDetails: "+ id +"expected changes: "+bankDetailsDTO);
		return new ResponseDTO<>(HttpStatus.OK, "BankDetails added successfully..!", userService.addBankDetails(id, bankDetailsDTO));
	}
	
	@GetMapping("/bankDetailsList/{id}")
	public ResponseDTO<?> getBankDetails(@PathVariable int id) {
		System.out.println("in get user bankDetails "+id);
		return new ResponseDTO<>(HttpStatus.OK, "List of bankDetails fetched successfully..!!", userService.listOfBankDetails(id));
	}
}
