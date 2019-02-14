import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient
    ) { }

  authenticate(url: string, username: string, password: string, success, fail) {
    return this.http.post<any>(url,
      JSON.stringify({username: username, password: password}),
      {
        headers: {
          'Content-Type': 'application/json'
        },
        observe: 'response'
      })
      .toPromise()
      .then((resp) => {
        localStorage.setItem('userToken', JSON.stringify(resp.headers.get('Authorization')));
        success();
      },
      (err) => {
        fail(err);
      });
  }

  // getUserRole(url: string, username:string, success, fail){
  //   this.http.post<any>(url,
  //     JSON.stringify({username: username}),
  //     {
  //       headers: {
  //         Authorization: localStorage.getItem('userToken')
  //       }
  //     }).toPromise().then((resp)=>{
  //       success(resp)
  //     },
  //     (err)=>fail(err))
  // }
  checkRole(url: string, success, fail){
    this.http.get<any>(url,
      {headers:{
        Authorization: localStorage.getItem('userToken')
      }}).toPromise().then(success(),fail())
  }
}