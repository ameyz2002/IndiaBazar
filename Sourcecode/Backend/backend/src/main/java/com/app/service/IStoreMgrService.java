package com.app.service;

import java.util.List;

import com.app.dto.ProductDTO;
import com.app.pojos.Product;

public interface IStoreMgrService {
	List<ProductDTO> getProductList();
	List<Product> getSellerProductList();
	Product addProductDetails(int categoryId, int sellerId, ProductDTO productDTO);
	void deleteProduct(int productId);
}
