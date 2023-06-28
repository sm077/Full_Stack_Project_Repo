package com.project.Full_Stack_Project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Full_Stack_Project.model.Admin;
import com.project.Full_Stack_Project.model.LoginPage;
import com.project.Full_Stack_Project.service.LoginService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class LoginController {

	@Autowired
	private LoginService loginService;
	@PostMapping("/login")
	
	public ResponseEntity<?> getLoggedIn(@RequestBody LoginPage loginData){
		
		Admin admin = loginService.getAdmin(loginData);
		if(admin.getPassword().equals(loginData.getPassword()))
			return ResponseEntity.ok(admin);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
		
	}
	
	
}
