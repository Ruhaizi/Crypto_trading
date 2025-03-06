package com.ruhi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ruhi.response.ApiResponse;


@RestController
public class   HomeController {
	
	@GetMapping("")
	public ResponseEntity<ApiResponse> homeController(){


		ApiResponse res=new ApiResponse(
				"Welcome to Crypto Trading Platform, working fine!",
				true
		);
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
	}

}