import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket'


@Injectable({
  providedIn: 'root'
})
export class TickethandlerService {

  detailTicket: Ticket;

  constructor(private http: HttpClient) { }

  getTickets(url: string, success, fail){
    this.http.get<Ticket[]>(url, {headers:{Authorization: localStorage.getItem('userToken')}})
    .toPromise().then((resp)=>{
      let tickets: Ticket[]=[];
      resp.forEach(ticket=>tickets.push(this.ticketParse(ticket)));
      success(tickets)},
      (err)=>fail(err))
  }
  getResidentTickets(url: string, success, fail){
    this.http.post<any>(url, localStorage.getItem('userId'),
    {headers:{Authorization: localStorage.getItem('userToken')}})
    .toPromise().then((resp)=>{
      let tickets: Ticket[]=[];
      resp.forEach(ticket=>tickets.push(this.ticketParse(ticket)));
      success(tickets)},
      (err)=>fail(err))
  }

  resolveTicket(url: string, ticket:Ticket, success, fail){
    this.http.post<any>(url, 
      {headers:{Authorization:localStorage.getItem('userToken')},
     body:JSON.stringify(ticket)})
    .subscribe();
  }
  // getTicketDetail(url: string, ticketId: number, success, fail){
  //   this.http.post<any>(url,JSON.stringify(ticketId))
  // }
  ticketParse(ticket){
    let parsedTicket = new Ticket(
      ticket[0],
      new Date(),
      ticket[2],
      ticket[3],
      new Date(),
      ticket[5],
      ticket[6],
      ticket[7]
      );
      parsedTicket.submitted.setTime(ticket[1]);
      parsedTicket.resolved.setTime(ticket[4]);
      console.log(parsedTicket);
      return parsedTicket;
  }
}
