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
     //get ID
    this.login.checkRole(environment.loginGetUserId,this.username,
      (resp)=>{localStorage.setItem('userId', resp);
      console.log(localStorage.getItem('userId'))},
      ()=>{})
      //getRole
    this.login.checkRole(environment.loginGetRoleId,this.username,
      (resp)=>{localStorage.setItem('userRole', resp);
        if(resp==1){
          this.router.navigate(['/resident'])
        }if(resp==2){
          this.router.navigate(['/manager'])
        }if(resp==3){
          this.router.navigate(['/maintenance'])
        }},
      ()=>{})
   }
 
  noShake(){
    this.shake=false;
  }
 }

