import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resident-login-page',
  templateUrl: './resident-login-page.component.html',
  styleUrls: ['./resident-login-page.component.css']
})
export class ResidentLoginPageComponent implements OnInit {

  title = "Resident Login";
  authUrl = environment.residentAuth;
  constructor() { }

  ngOnInit() {
  }

}
