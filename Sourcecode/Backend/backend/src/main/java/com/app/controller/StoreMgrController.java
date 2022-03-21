package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ProductDTO;
import com.app.dto.ResponseDTO;
import com.app.service.IStoreMgrService;

@RestController
@CrossOrigin
@RequestMapping("/storeMgr")
public class StoreMgrController {

	
	@Autowired
	private IStoreMgrService storeMgrService;
	
	public StoreMgrController() {
		System.out.println("in ctor of " + getClass().getName());
	}
	
	@GetMapping("/productList")
	public ResponseDTO<?> getAllProducts() {
		System.out.println("in get all products");
		return new ResponseDTO<>(HttpStatus.OK, "List of all products fetched succesfully..!!", storeMgrService.getProductList());
	}
	
	@GetMapping("/sellerProductList")
	public ResponseDTO<?> getAllDetailedProductList() {
		System.out.println("in get all detailed product list");
		return new ResponseDTO<>(HttpStatus.OK, "Detailed list of all products fetched succesfully..!!", storeMgrService.getSellerProductList());
	}
	
	@PostMapping("/addProduct/{categoryId}/{sellerId}")
	public ResponseDTO<?> addProduct(@PathVariable int categoryId, @PathVariable int sellerId,  @RequestBody ProductDTO productDTO) {
		System.out.println("in addProduct: categoryId: "+ categoryId +" sellerId : "+ sellerId +" expected changes: "+productDTO);
		return new ResponseDTO<>(HttpStatus.OK, "Product added successfully..!", storeMgrService.addProductDetails(categoryId, sellerId, productDTO));
	}
	
	@DeleteMapping("/deleteProduct/{productId}")
	public ResponseDTO<?> deleteProduct(@PathVariable int productId) {
		System.out.println("in del product: " + productId);
		try {
			storeMgrService.deleteProduct(productId);;
			return new ResponseDTO<>(HttpStatus.OK, "Product deleted successful..!!", null);
		}catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product deletion failed", null);
		}
	}
}
