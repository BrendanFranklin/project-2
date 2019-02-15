import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserHandlerService } from '../services/user-handler.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  resident: boolean

  users: User[]

  constructor(private userService: UserHandlerService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers(environment.managerGetUsers,
       (users)=>{this.users = users},
       ()=>{})
  }

}
