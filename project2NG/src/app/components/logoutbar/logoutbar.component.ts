import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutbar',
  templateUrl: './logoutbar.component.html',
  styleUrls: ['./logoutbar.component.css']
})
export class LogoutbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  logout(){
    localStorage.removeItem("userToken");
    this.router.navigate(['']);

  }

}
