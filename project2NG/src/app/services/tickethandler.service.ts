import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket'


@Injectable({
  providedIn: 'root'
})
export class TickethandlerService {

  constructor(private http: HttpClient) { }

  getTickets(url: string, success, fail){
    this.http.post<Ticket[]>(url, {headers:{Authorization: localStorage.getItem('userToken')}})
    .toPromise().then((resp)=>success(resp),(err)=>fail(err))
  }

  resolveTicket(url: string, ticket:Ticket, success, fail){
    this.http.post<any>(url, 
      {headers:{Authorization: localStorage.getItem('userToken')},
     body:JSON.stringify(ticket)})
    .toPromise().then((resp)=>success(resp),(err)=>fail(err))
  }
}
