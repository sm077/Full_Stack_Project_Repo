import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplyeeListComponent } from './emplyee-list/emplyee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
 {path:'employees', component: EmplyeeListComponent},
 {path:'create-employee', component: CreateEmployeeComponent},
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'update-employee/:id', component:UpdateEmployeeComponent},
 {path:'employee-details/:id', component:EmployeeDetailsComponent},
 {path:'login',component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
