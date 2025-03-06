package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.Coin;


public interface CoinRepository extends JpaRepository<Coin,String>{

}
