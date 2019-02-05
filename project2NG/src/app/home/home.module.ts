import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProspectivepageComponent } from './prospectivepage/prospectivepage.component';
import { AppartmentlistComponent } from './prospectivepage/appartmentlist/appartmentlist.component';
import { FilterComponent } from './prospectivepage/components/filter/filter.component';
import { ResidentloginComponent } from './residentlogin/residentlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';
import { ResidentLoginPageComponent } from './resident-login-page/resident-login-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [HomepageComponent, NavbarComponent, ProspectivepageComponent, AppartmentlistComponent, FilterComponent, ResidentloginComponent, EmployeeloginComponent, EmployeeLoginPageComponent, ResidentLoginPageComponent, LoginComponentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
