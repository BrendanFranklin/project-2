import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-login-page',
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.css']
})
export class EmployeeLoginPageComponent implements OnInit {

  title: string = "Employee Login"
  constructor() { }

  ngOnInit() {
  }

}
