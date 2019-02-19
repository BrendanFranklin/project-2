import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserHandlerService {

  constructor(private http: HttpClient) { }

  getUsers(url, success, fail){
    this.http.get<any>(url,{headers:{'Authorization': localStorage.getItem('userToken')}})
    .toPromise().then(
      (resp)=>{
        let users: User[] = [];
        resp.forEach(user=>{
          users.push(this.parseUser(user))
        })
        success(users);
      }),
      fail();
  }

  parseUser(user){
    let newUser = new User(
      user[0],
      user[3],
      user[4],
      user[5],
      "",
      user[7]
    )
    if(user[6]==1){
      newUser.role = 'Resident';
    }
    if(user[6]==2){
      newUser.role = 'Manager';
    }
    if(user[6]==3){
      newUser.role = 'Maintenance';
    }
    return newUser;
  }

  createUser(url, user, success){
    this.http.post<any>(url, user).toPromise().then(success())
  }
}
