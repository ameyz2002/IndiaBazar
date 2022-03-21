package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Cart;

public interface ICartRepository extends JpaRepository<Cart, Integer> {

	
	@Query("select c from Cart c where c.user.userId=:uId and c.product.productId=:pId")
	Optional<Cart> searchByUserIdAndProductId(@Param("uId") int userId, @Param("pId") int productId);
	
	@Query("select c from Cart c  where c.user.userId=:uId")
	List<Cart> searchByUserId(@Param("uId") int userId);
}
