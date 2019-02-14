import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  shake: boolean;
  username: string;
  password: string;
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
      ()=>this.reroute(),
     (err) => {
       console.log(err);
       this.shake=true;
       this.username="";
       this.password="";
     })
  }
 
   reroute(){
  //   this.login.checkRole(environment.checkResident,
  //     ()=>this.router.navigate(['/resident']),
  //   ()=>this.login.checkRole(environment.checkmaintenance,
  //     ()=>this.router.navigate(['/maintenance']),
  //     ()=>this.login.checkRole(environment.checkManager,
  //       ()=>this.router.navigate(['/manager']),
  //       ()=>this.shake=true)))
   }
 
  noShake(){
    this.shake=false;
  }
 }

