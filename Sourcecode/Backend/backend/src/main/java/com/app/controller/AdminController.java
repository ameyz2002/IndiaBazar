package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CategoryDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.SellerDTO;
import com.app.dto.UserDTO;
import com.app.service.IAdminService;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

	
	@Autowired
	private IAdminService adminService;
	
	
	public AdminController() {
		System.out.println("in ctor of " + getClass().getName());
	}
	
	@GetMapping("/userList")
	public ResponseDTO<?> getAllUsers() {
		System.out.println("in get all users");
		return new ResponseDTO<>(HttpStatus.OK, "List of all users fetched succesfully..!!", adminService.getAllUsers());
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	public ResponseDTO<?> deleteUserDetails(@PathVariable int userId) {
		System.out.println("in del user dtls " + userId);
		try {
			adminService.deleteUserDetails(userId);
			return new ResponseDTO<>(HttpStatus.OK, "User deleted successful..!!", null);
		}catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User deletion failed", null);
		}
	}
	
	
	@PostMapping("/addUser")
	public ResponseDTO<?> addUser(@RequestBody UserDTO userDTO) {
		try {
			System.out.println("in addUser "+userDTO);
			return new ResponseDTO<>(HttpStatus.OK, "User added Successfully..!!", adminService.addUserDetails(userDTO));
		} catch (RuntimeException e) {
			System.out.println("err in adduser " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User addition failed", null);
		}
		
	}
	
	@PostMapping("/addSeller")
	public ResponseDTO<?> addSeller(@RequestBody SellerDTO sellerDTO) {
		try {
			System.out.println("in addUser "+sellerDTO);
			return new ResponseDTO<>(HttpStatus.OK, "Seller added Successfully..!!", adminService.addSellerDetails(sellerDTO));
		} catch (RuntimeException e) {
			System.out.println("err in addseller " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Seller addition failed", null);
		}
		
	}
	
	@GetMapping("/sellerList")
	public ResponseDTO<?> getAllSellers() {
		System.out.println("in get all sellers");
		return new ResponseDTO<>(HttpStatus.OK, "List of all sellers fetched succesfully..!!", adminService.getAllSellers());
	}
	
	@DeleteMapping("/deleteSeller/{sellerId}")
	public ResponseDTO<?> deleteSellerDetails(@PathVariable int sellerId) {
		System.out.println("in del user dtls " + sellerId);
		try {
			adminService.deleteSellerDetails(sellerId);
			return new ResponseDTO<>(HttpStatus.OK, "Seller deleted successful..!!", null);
		}catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User deletion failed", null);
		}
	}
	
	@GetMapping("/categoryList")
	public ResponseDTO<?> getAllCategory() {
		System.out.println("in get all category");
		return new ResponseDTO<>(HttpStatus.OK, "List of all category fetched succesfully..!!", adminService.getAllCategories());
	}
	
	@DeleteMapping("/deleteCategory/{categoryId}")
	public ResponseDTO<?> deleteCategoryDetails(@PathVariable int categoryId) {
		System.out.println("in del category dtls " + categoryId);
		try {
			adminService.deleteCategoryDetails(categoryId);
			return new ResponseDTO<>(HttpStatus.OK, "Category deleted successful..!!", null);
		}catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Category deletion failed", null);
		}
	}
	
	@PostMapping("/addCategory")
	public ResponseDTO<?> addCategory(@RequestBody CategoryDTO categoryDTO) {
		try {
			System.out.println("in addCategory "+categoryDTO);
			return new ResponseDTO<>(HttpStatus.OK, "Category added Successfully..!!", adminService.addCategoryDetails(categoryDTO));
		} catch (RuntimeException e) {
			System.out.println("err in addCategory " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Category addition failed", null);
		}
		
	}
	
	@GetMapping("/productList")
	public ResponseDTO<?> getAllProducts() {
		System.out.println("in get all products");
		return new ResponseDTO<>(HttpStatus.OK, "List of all products fetched succesfully..!!", adminService.getSellerProductList());
	}
	
	
	@PutMapping("/approveProduct/{productId}")
	public ResponseDTO<?> approveProduct(@PathVariable int productId) {
		System.out.println("in get approve Product "+productId);
		try {
			adminService.approveProduct(productId);
			return new ResponseDTO<>(HttpStatus.OK, "Product approved succesfully..!!", null);
		}catch (RuntimeException e) {
			System.out.println("err in approveProduct " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product approval failed", null);
		}
	}
	
	@GetMapping("/searchProductByName/{productName}")
	public ResponseDTO<?> searchProductByName(@PathVariable String productName) {
		System.out.println("in searchProductByName " +productName);
		return new ResponseDTO<>(HttpStatus.OK, "Product fetched succesfully..!!", adminService.searchByProductName(productName));
	}
}
