package com.ruhi.service;

import com.ruhi.model.Coin;
import com.ruhi.model.User;
import com.ruhi.model.Watchlist;

public interface WatchlistService {
	
	  Watchlist findUserWatchlist(Long userId) throws Exception;

	    Watchlist createWatchList(User user);

	    Watchlist findById(Long id) throws Exception;

	    Coin addItemToWatchlist(Coin coin,User user) throws Exception;

}
