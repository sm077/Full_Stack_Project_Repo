package com.project.Full_Stack_Project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Full_Stack_Project.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	Admin findByEmail(String email);
}
