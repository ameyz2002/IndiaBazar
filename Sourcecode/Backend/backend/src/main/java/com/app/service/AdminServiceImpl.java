package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ICategoryRepository;
import com.app.dao.IProductRepository;
import com.app.dao.ISellerRepository;
import com.app.dao.IUserRepository;
import com.app.dto.CategoryDTO;
import com.app.dto.SellerDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.User;


@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	
	@Autowired
	private IUserRepository userRepo;
	
	@Autowired
	private ISellerRepository sellerRepo;
	
	@Autowired
	private ICategoryRepository categoryRepo;
	
	@Autowired
	private IProductRepository productRepo;

	//user-management

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
	

	@Override
	public void deleteUserDetails(int userId) {
		boolean exists = userRepo.existsById(userId);
		if(!exists)
			throw new ResourceNotFoundException("Invalid user id..!!");
		userRepo.deleteById(userId);
		
	}

	@Override
	public User addUserDetails(UserDTO userDTO) {
		User user = new User();
		BeanUtils.copyProperties(userDTO, user);
		user.setRegDate(LocalDate.now());
		System.out.println("add user src : " + userDTO);
		System.out.println(user);
		return userRepo.save(user);
	}

	
	//seller-management
	
	@Override
	public Seller addSellerDetails(SellerDTO sellerDTO) {
		Seller seller = new Seller();
		BeanUtils.copyProperties(sellerDTO, seller);
		System.out.println("add seller src : " + sellerDTO);
		System.out.println(seller);
		return sellerRepo.save(seller);
	}
	
	@Override
	public List<Seller> getAllSellers() {
		return sellerRepo.findAll();
	}
	
	@Override
	public void deleteSellerDetails(int sellerId) {
		boolean exists = sellerRepo.existsById(sellerId);
		if(!exists)
			throw new ResourceNotFoundException("Invalid seller id..!!");
		sellerRepo.deleteById(sellerId);
		
	}
	
	//category-management

	@Override
	public List<Category> getAllCategories() {
		return categoryRepo.findAll();
	}

	@Override
	public void deleteCategoryDetails(int categoryId) {
		boolean exists = categoryRepo.existsById(categoryId);
		if(!exists)
			throw new ResourceNotFoundException("Invalid category id..!!");
		categoryRepo.deleteById(categoryId);
		
	}

	@Override
	public Category addCategoryDetails(CategoryDTO categoryDTO) {
		Category category = new Category();
		BeanUtils.copyProperties(categoryDTO, category);
		System.out.println("add seller src : " + categoryDTO);
		System.out.println(category);
		return categoryRepo.save(category);
	}

	
	//product-management
	
	@Override
	public List<Product> getSellerProductList() {
		return productRepo.sellerProductList();
	}

	@Override
	public void approveProduct(int productId) {
		Product p = productRepo.findById(productId).get();
		p.setIsapproved(true);
		
	}


	@Override
	public List<Product> searchByProductName(String productName) {
		return productRepo.searchByProductNameLike(productName);
	}


	

	

	

	
	

}
