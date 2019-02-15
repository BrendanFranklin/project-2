import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentHandlerService {

  constructor(private http: HttpClient) { }

  getRent(url, success, fail){
    this.http.get<any>(url, {headers:{'Authorization': localStorage.getItem('userToken')}})
    .toPromise().then(
      (resp)=>{
        let rents: Rent[] = [];
        resp.forEach(rent=>{
          rents.push(this.parseRent(rent))
        })
        success(rents);
      }),
      fail();
  }

  parseRent(rent){

  }
}
