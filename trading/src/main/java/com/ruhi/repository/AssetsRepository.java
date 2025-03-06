package com.ruhi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.Asset;


public interface AssetsRepository extends JpaRepository<Asset,Long> {
	
	public List<Asset> findByUserId(Long userId);

	   Asset findByUserIdAndCoinId(Long userId, String coinId);

	   Asset findByIdAndUserId(Long assetId, Long userId);

}
