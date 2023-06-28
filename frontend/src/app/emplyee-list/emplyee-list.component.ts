import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emplyee-list',
  templateUrl: './emplyee-list.component.html',
  styleUrls: ['./emplyee-list.component.css']
})
export class EmplyeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,private router:Router){ }

  ngOnInit(): void {

    this.getEmployees();

  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
    }

    updateEmployee(id: number){
      this.router.navigate(['update-employee',id]);
    }

    deleteEmployee(id: number){
this.employeeService.deleteEmployee(id).subscribe(data =>{
  console.log(data);
  this.getEmployees();  
})
    }  

    employeeDetails(id:number){
      this.router.navigate(['employee-details',id]);
    }


}

