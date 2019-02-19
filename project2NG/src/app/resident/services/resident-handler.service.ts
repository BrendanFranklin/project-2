import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartment } from 'src/app/models/apartment';
import { Payment } from 'src/app/models/payment';

@Injectable({
  providedIn: 'root'
})
export class ResidentHandlerService {

  constructor(private http: HttpClient) { }
  getApt(url, success){
    this.http.post<any>(url, JSON.stringify({user_id: parseInt(localStorage.getItem('userId'))}),
    {headers:{'Authorization': localStorage.getItem('userToken'),
  'content-type': 'application/json'}}).toPromise().then((resp)=>{
    let apt: Apartment = new Apartment(resp[0][0],resp[0][1],resp[0][2],true);
    success(apt);})
  }
  getRent(url, success){
    this.http.post<any>(url, JSON.stringify({user_id: parseInt(localStorage.getItem('userId'))}),
    {headers:{'Authorization': localStorage.getItem('userToken'),
  'content-type': 'application/json'}}).toPromise().then((resp)=>{
    let payment: Payment = new Payment(resp[0][0],resp[0][1],resp[0][2], resp[0][3]);
    success(payment);
  })
  }
}
