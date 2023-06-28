package com.project.Full_Stack_Project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Full_Stack_Project.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
