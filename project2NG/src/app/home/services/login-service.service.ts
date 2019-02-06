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

  authenticate(username: string, password: string, success, fail) {
    return this.http.post<any>(environment.authUrl,
      JSON.stringify({username: username, password: password}),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .toPromise()
      .then((resp) => {
        localStorage.setItem('userToken', JSON.stringify(resp));
        success();
      },
      (err) => {
        fail(err);
      });
  }
}