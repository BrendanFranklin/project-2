import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ApartmentsPageComponent } from './apartments-page/apartments-page.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { ApplicationsPageComponent } from './applications-page/applications-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';

@NgModule({
  declarations: [NavbarComponent, UsersPageComponent, ApartmentsPageComponent, RentPageComponent, ApplicationsPageComponent, EmployeePageComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
