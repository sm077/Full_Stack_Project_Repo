package com.project.Full_Stack_Project.model;

public class LoginPage {
	
	private String email;
	private String password;
	
	public LoginPage() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginPage(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "LoginPage [email=" + email + ", password=" + password + "]";
	}
	
	

}
