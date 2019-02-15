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

  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  resident: boolean
  apt_num: number

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

  submit(){
    let user;
    if(this.resident = true){
    user = {first_name: this.first_name, last_name: this.last_name,
    email: this.email,username:this.username, password: this.password, role_id: 1, apt_num: this.apt_num}
    }else{
      user = {first_name: this.first_name, last_name: this.last_name,
        email: this.email,username:this.username, password: this.password, role_id: 2}
    }
    this.userService.createUser(environment.managerMakeUser, user,()=>{this.getUsers()})
  }
}
