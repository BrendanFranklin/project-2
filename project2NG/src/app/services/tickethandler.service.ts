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
       let year1 = ticket[1].length[0]+ticket[1].length[1]+ticket[1].length[2]+ticket[1].length[3];
       let month1 = ticket[1].length[6]+ticket[1].length[7];
       let date1 = ticket[1].length[9]+ticket[1].length[10];
     parsedTicket.submitted.setFullYear(parseInt(year1));
     parsedTicket.submitted.setMonth(parseInt(month1)-1);
     parsedTicket.submitted.setDate(parseInt(date1));

     year1 = ticket[4].length[0]+ticket[4].length[1]+ticket[4].length[2]+ticket[4].length[3];
     month1 = ticket[4].length[6]+ticket[4].length[7];
     date1 = ticket[4].length[9]+ticket[4].length[10];
     parsedTicket.resolved.setFullYear(parseInt(year1));
     parsedTicket.resolved.setMonth(parseInt(month1)-1);
     parsedTicket.resolved.setDate(parseInt(date1));
      console.log(ticket[1]);
      return parsedTicket;
  }
}
