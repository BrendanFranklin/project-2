import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProspectivepageComponent } from './prospectivepage/prospectivepage.component';
import { FilterComponent } from './prospectivepage/components/filter/filter.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';
import { ResidentLoginPageComponent } from './resident-login-page/resident-login-page.component';
import { LoginComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [HomepageComponent, NavbarComponent, ProspectivepageComponent, FilterComponent, EmployeeLoginPageComponent, ResidentLoginPageComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
