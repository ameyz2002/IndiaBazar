package com.app.service;

import java.util.List;

import com.app.dto.CategoryDTO;
import com.app.dto.SellerDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.User;

public interface IAdminService {
	List<User> getAllUsers();
	void deleteUserDetails(int userId);
	User addUserDetails(UserDTO userDTO);
	
	Seller addSellerDetails(SellerDTO sellerDTO);
	List<Seller> getAllSellers();
	void deleteSellerDetails(int sellerId);
	
	List<Category> getAllCategories();
	void deleteCategoryDetails(int categoryId);
	Category addCategoryDetails(CategoryDTO categoryDTO);
	
	List<Product> getSellerProductList();
	void approveProduct(int productId);
	List<Product> searchByProductName(String productName);
}
