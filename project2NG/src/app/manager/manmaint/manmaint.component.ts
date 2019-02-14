import { Component, OnInit } from '@angular/core';
import { TickethandlerService } from 'src/app/services/tickethandler.service';
import { Ticket } from 'src/app/models/ticket';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-manmaint',
  templateUrl: './manmaint.component.html',
  styleUrls: ['./manmaint.component.css']
})
export class ManmaintComponent implements OnInit {

  manager = true;
  tickets: Ticket[];

  constructor(private ticketHandler: TickethandlerService) { }

  ngOnInit() {
    this.getTickets();
  }
  resolve(ticket: Ticket){
    this.ticketHandler.resolveTicket(
      environment.managerUpdateTicket,
      ticket,
      ()=>this.getTickets(),
      (err)=>console.log(err))
  }
  getTickets(){
    this.ticketHandler.getTickets(
      environment.managerGetTickets,
      (tickets: Ticket[])=>{this.tickets=tickets},
      (err)=>console.log(err))
  }
}
