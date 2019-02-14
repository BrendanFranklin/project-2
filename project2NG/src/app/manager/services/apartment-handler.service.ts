import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ApartmentHandlerService {

  constructor(private http: HttpClient) { }

  getApts(url, success, fail){
    this.http.get<any>(url,
      {headers:{'Authorization': localStorage.getItem('userToken')}})
      .toPromise().then(
        (resp)=>{
          resp.forEach(apt=>{
            this.parseApt(apt)
          })
          this.parseApt
        })
  }
  
  parseApt(apt){

  }
}
