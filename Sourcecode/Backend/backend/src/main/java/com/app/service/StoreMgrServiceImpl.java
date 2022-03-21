package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ICategoryRepository;
import com.app.dao.IProductRepository;
import com.app.dao.ISellerRepository;
import com.app.dto.ProductDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Seller;

@Service
@Transactional
public class StoreMgrServiceImpl implements IStoreMgrService {

	@Autowired
	private IProductRepository productRepo;

	@Autowired
	private ISellerRepository sellerRepo;

	@Autowired
	private ICategoryRepository categoryRepo;

	@Override
	public List<Product> getSellerProductList() {
		return productRepo.sellerProductList();
	}

	@Override
	public List<ProductDTO> getProductList() {
		List<ProductDTO> list = new ArrayList<>();
		ProductDTO product = new ProductDTO();
		productRepo.sellerProductList().forEach(p -> {
			BeanUtils.copyProperties(p, product);
			list.add(product);
		});

		return list;
	}

	@Override
	public Product addProductDetails(int categoryId, int sellerId, ProductDTO productDTO) {
		productDTO.setProductId(0);
		System.out.println("in service method id : " + categoryId + " " + sellerId + " productDTO: " + productDTO);
		Product productDetails = new Product();
		BeanUtils.copyProperties(productDTO, productDetails);
		System.out.println("add product source : " + productDTO);
		System.out.println(productDetails);
		Seller seller = sellerRepo.findById(sellerId).get();
		Category category = categoryRepo.findById(categoryId).get();
		productDetails.setSeller(seller);
		productDetails.setCategory(category);
		Product newProduct = productRepo.save(productDetails);
		System.out.println("newProduct : " + newProduct);
		seller.getProducts().add(newProduct);
		category.getProducts().add(newProduct);
		return newProduct;
	}

	@Override
	public void deleteProduct(int productId) {
		boolean exists = productRepo.existsById(productId);
		if(!exists)
			throw new ResourceNotFoundException("Invalid product id..!!");
		productRepo.deleteById(productId);
		
	}
	
	

}
