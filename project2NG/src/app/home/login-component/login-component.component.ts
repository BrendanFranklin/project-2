import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  shake: boolean;
  username: string;
  password: string;
  locationUrl: string;
  @Input() title: string;
  @Input() authUrl: string;

   constructor(private router: Router,
    private login: LoginService
    ) { }

  ngOnInit() {
    this.shake = false;
  }

  submit() {
     this.login.authenticate(this.authUrl, this.username, this.password,
     () => //this.router.navigate([this.locationUrl]),
     {console.log(localStorage.getItem('userToken'))},
     (err) => {
       console.log(err);
       this.shake=true;
       this.username="";
       this.password="";
       //this.location.go(`${environment.failLoginUrl}?status=${err.status}&msg=${err.error}`)
     });
  }
  noShake(){
    this.shake=false;
  }
 }

