import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket'


@Injectable({
  providedIn: 'root'
})
export class TickethandlerService {

  constructor(private http: HttpClient) { }

  getTickets(url, success, fail){
    this.http.get<Ticket[]>(url, {headers:{bearer: localStorage.getItem('userToken')} })
    .toPromise().then((resp)=>success(resp), fail())
  }
}
