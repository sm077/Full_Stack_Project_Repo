import { Component } from '@angular/core';
import { Admin } from '../admin';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin:Admin = new Admin();
  constructor(private loginService:LoginService,private router:Router){}
    loginData(){
      console.log(this.admin);
      this.loginService.loginCredential(this.admin).subscribe(response =>{
        console.log(response);
        alert("login successfully")
        this.router.navigate(['employees']);
      },error=>{
        alert("Username or Password is incorrect")
      })
      
    }
  

}
