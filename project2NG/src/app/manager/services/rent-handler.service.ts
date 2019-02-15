import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from 'src/app/models/payment';

@Injectable({
  providedIn: 'root'
})
export class RentHandlerService {

  constructor(private http: HttpClient) { }

  getRent(url, success, fail){
    this.http.get<any>(url, {headers:{'Authorization': localStorage.getItem('userToken')}})
    .toPromise().then(
      (resp)=>{
        let rents: Payment[] = [];
        resp.forEach(rent=>{
          rents.push(this.parseRent(rent))
        })
        success(rents);
      }),
      fail();
  }

  parseRent(rent){
    let newRent = new Payment(
      rent[0],
      rent[1],
      rent[2],
      rent[3]
    )

    return newRent;
  }
}
