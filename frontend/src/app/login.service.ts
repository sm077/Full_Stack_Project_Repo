import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string = "http://localhost:8080/api/v1/login";


  constructor(private http:HttpClient) {    }

  loginCredential(admin:Admin):Observable<Admin>{
    return this.http.post<Admin>(`${this.baseUrl}`,admin);
  }
}
