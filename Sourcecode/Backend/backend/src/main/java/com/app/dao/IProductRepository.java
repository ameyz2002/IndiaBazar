package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Product;

public interface IProductRepository extends JpaRepository<Product, Integer> {
	
	@Query("SELECT p FROM Product p left outer join fetch p.seller WHERE p.productName LIKE %:productnm%")
	List<Product> searchByProductNameLike(@Param("productnm") String productName);
	
	@Query("SELECT p FROM Product p left outer join fetch p.seller WHERE p.category.categoryId=:catId")
	List<Product> searchBycategoryId(@Param("catId") int id);
	
	//List<Product> findByProductNameContainingIgnoreCase(String productName);

	@Query("select p from Product p left outer join fetch p.seller")
	List<Product> sellerProductList();
	
	@Query("select p from Product p left outer join fetch p.seller where p.productId=:pId")
	Optional<Product> findProductById(@Param("pId") int id);
}
