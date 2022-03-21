package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Address;

public interface IAddressRepository extends JpaRepository<Address, Integer> {

	@Query("select a from Address a where user_id=:id")
	List<Address> getAllAddress(@Param("id")long id);
	
}
