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
    
  }
}
