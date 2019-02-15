import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import {TickethandlerService} from '../../services/tickethandler.service'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {

  manager = true;
  tickets: Ticket[];

  constructor(private ticketHandler: TickethandlerService) { }

  ngOnInit() {
    this.getTickets();
  }
  resolve(ticket: Ticket){

  }
  getTickets(){
    this.ticketHandler.getTickets(
      environment.managerGetTickets,
      (tickets: Ticket[])=>{this.tickets=tickets},
      (err)=>console.log(err))
  }
}
