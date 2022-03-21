package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.BankDetails;

public interface IBankDetailsRepository extends JpaRepository<BankDetails, Integer> {

	@Query("select b from BankDetails b where user_id=:id")
	List<BankDetails> getAllBankDetails(@Param("id")long id);
}
