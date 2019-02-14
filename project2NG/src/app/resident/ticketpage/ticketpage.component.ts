import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';

import { TickethandlerService} from '../../services/tickethandler.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ticketpage',
  templateUrl: './ticketpage.component.html',
  styleUrls: ['./ticketpage.component.css']
})
export class TicketpageComponent implements OnInit {

  manager: boolean = false;
  tickets: Ticket[];

  constructor( private ticketHandler: TickethandlerService) {}

  ngOnInit() {
  }

  getTickets(){
    this.ticketHandler.getTickets(
      environment.residentGetTickets,
      (tickets: Ticket[])=>{this.tickets = tickets},
      (err)=>console.log(err))
  }

}
