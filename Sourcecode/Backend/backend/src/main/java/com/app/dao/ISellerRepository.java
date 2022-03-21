package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Seller;

public interface ISellerRepository extends JpaRepository<Seller, Integer> {

}
