import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProspectivepageComponent } from './prospectivepage/prospectivepage.component';
import { ResidentLoginPageComponent } from './resident-login-page/resident-login-page.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'apartments',
    component: ProspectivepageComponent
  },
  {
    path:'residentlogin',
    component: ResidentLoginPageComponent
  },
  {
    path:'employeelogin',
    component: EmployeeLoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
