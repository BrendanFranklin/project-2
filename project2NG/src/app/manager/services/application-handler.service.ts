import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from 'src/app/models/application';


@Injectable({
  providedIn: 'root'
})
export class ApplicationHandlerService {

  constructor(private http: HttpClient) { }
  getAllApps(url: string, success, fail ){
    this.http.get<any>(url,{headers:{'Authorization': localStorage.getItem('userToken')}})
    .toPromise().then(
      (resp)=>{
        let apps: Application[] = [];
        resp.forEach(app=>{
          apps.push(this.parseApp(app))
        })
        success(apps);
      }),
      fail();
  }
  parseApp(app){
    let newApp = new Application(
      app[1],
      app[2],
      app[3],
      app[4]
    )
    return newApp
  }
}
