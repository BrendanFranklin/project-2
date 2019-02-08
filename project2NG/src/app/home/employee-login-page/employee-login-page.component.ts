import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-login-page',
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.css']
})
export class EmployeeLoginPageComponent implements OnInit {

  title: string = "Employee Login";
  authUrl: string = environment.employeeAuth;
  constructor() { }

  ngOnInit() {
  }

}
