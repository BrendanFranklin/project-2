import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

import { ProspectivepageComponent } from './prospectivepage/prospectivepage.component';
import { FilterComponent } from './prospectivepage/components/filter/filter.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';
import { ResidentLoginPageComponent } from './resident-login-page/resident-login-page.component';
import { LoginComponent } from './login-component/login-component.component';
import {NavbarComponent} from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationComponent } from './application/application.component';
import {AppartmentlistComponent} from './prospectivepage/components/appartmentlist/appartmentlist.component';
import { AppformComponent } from './application/appform/appform.component';

@NgModule({
  declarations: [AppartmentlistComponent, HomepageComponent, NavbarComponent,
     ProspectivepageComponent, FilterComponent,
      EmployeeLoginPageComponent, ResidentLoginPageComponent,
       LoginComponent,
       HeaderComponent,
       FooterComponent,
       ApplicationComponent,
       AppformComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
