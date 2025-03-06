package com.ruhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruhi.model.Watchlist;

public interface WatchlistRepository extends JpaRepository<Watchlist,Long>{
	  Watchlist findByUserId(Long userId);
}
