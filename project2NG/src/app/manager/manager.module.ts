import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ApartmentsPageComponent } from './apartments-page/apartments-page.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { ApplicationsPageComponent } from './applications-page/applications-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { ManmaintComponent } from './manmaint/manmaint.component';
import {GlobalModule} from '../global/global.module';




@NgModule({
  declarations: [NavbarComponent,
    UsersPageComponent,
    ApartmentsPageComponent,
    RentPageComponent,
    ApplicationsPageComponent,
    EmployeePageComponent,
    ManagerhomeComponent,
    ManmaintComponent,
    ],

  imports: [
    CommonModule,
    ManagerRoutingModule,
    GlobalModule,
  ]
})
export class ManagerModule { }
