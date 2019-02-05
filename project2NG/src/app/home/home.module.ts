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

@NgModule({
  declarations: [HomepageComponent, NavbarComponent, ProspectivepageComponent, AppartmentlistComponent, FilterComponent, ResidentloginComponent, EmployeeloginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
