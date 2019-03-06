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
    this.http.get<Ticket[]>(url, {headers:{'Authorization': localStorage.getItem('userToken')}})
    .toPromise().then((resp)=>{
      let tickets: Ticket[]=[];
      resp.forEach(ticket=>tickets.push(this.ticketParse(ticket)));
      success(tickets)},
      (err)=>fail(err))
  }
  getResidentTickets(url: string, success, fail){
    this.http.post<any>(url, localStorage.getItem('userId'),
    {headers:{'Authorization': localStorage.getItem('userToken')}})
    .toPromise().then((resp)=>{
      let tickets: Ticket[]=[];
      resp.forEach(ticket=>tickets.push(this.ticketParse(ticket)));
      success(tickets)},
      (err)=>fail(err))
  }

  resolveTicket(url: string, ticket:Ticket){
    this.http.post<any>(url,
      JSON.stringify(ticket),
      {headers:{'Authorization':localStorage.getItem('userToken'),
      'content-type':'application/json'}})
    .subscribe();
  }
  // getTicketDetail(url: string, ticketId: number, success, fail){
  //   this.http.post<any>(url,JSON.stringify(ticketId))
  // }
  ticketParse(ticket){
    let parsedTicket = new Ticket(
      ticket[0],
      ticket[1],
      ticket[2],
      ticket[3],
      ticket[4],
      ticket[5],
      ticket[6],
      ticket[7],
      ticket[8]
      );
      return parsedTicket;
  }

  makeTicket(url,newTicket,success){
    this.http.post<any>(url,JSON.stringify(newTicket),
    {headers:{'Authorization': localStorage.getItem('userToken'),
  'content-type': 'application/json'}}).toPromise().then(success())
  }

  getResTickets(url,success,fail){
    this.http.post<Ticket[]>(url,JSON.stringify({author: parseInt(localStorage.getItem('userId'))})
     ,{headers:{'Authorization': localStorage.getItem('userToken'),
      'content-type': 'application/json'}})
    .toPromise().then((resp)=>{
      let tickets: Ticket[]=[];
      resp.forEach(ticket=>tickets.push(this.ticketParse(ticket)));
      success(tickets)},
      (err)=>fail(err))
  }
}
