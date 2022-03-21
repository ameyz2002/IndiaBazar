package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Order;

public interface IOrderRepository extends JpaRepository<Order, Integer> {

	
	@Query("select o from Order o where o.user.userId=:uId")
	List<Order> orderList(@Param("uId") int userId);
}
