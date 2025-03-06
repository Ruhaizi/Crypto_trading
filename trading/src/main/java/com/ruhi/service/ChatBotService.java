package com.ruhi.service;

import com.ruhi.model.CoinDTO;
import com.ruhi.response.ApiResponse;

public interface ChatBotService {
    ApiResponse getCoinDetails(String coinName);

    CoinDTO getCoinByName(String coinName);

    String simpleChat(String prompt);
}
