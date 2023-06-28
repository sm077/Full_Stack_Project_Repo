package com.project.Full_Stack_Project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Full_Stack_Project.model.Admin;
import com.project.Full_Stack_Project.model.LoginPage;
import com.project.Full_Stack_Project.repository.AdminRepository;

@Service
public class LoginService {

	@Autowired
	private AdminRepository adminRepository;
	
	public Admin getAdmin(LoginPage loginData) {
		return adminRepository.findByEmail(loginData.getEmail());
	}
}
