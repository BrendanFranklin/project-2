import { Component, OnInit } from '@angular/core';

import { Ticket } from 'src/app/models/ticket';

import { TickethandlerService } from 'src/app/services/tickethandler.service';
import { environment } from 'src/environments/environment';



@Component({

  selector: 'app-ticket-details',

  templateUrl: './ticket-details.component.html',

  styleUrls: ['./ticket-details.component.css']

})

export class TicketDetailsComponent implements OnInit {



  manager: boolean;

  ticket: Ticket;



  constructor(private ticketService: TickethandlerService) { }



  ngOnInit() {

   this.ticket =  this.ticketService.detailTicket;

   this.manager = true;

   if(parseInt(localStorage.getItem('userRole'))==1){

     this.manager = false;

   }
  }

  submit(resolved){
    if(resolved){
      this.ticket.resolved = true;
      this.ticket.resolver = parseInt(localStorage.getItem('userId'));
    }
    if(!this.ticket.resolved){
      this.ticket.resolver = 1
    }
    this.ticketService.resolveTicket(environment.managerUpdateTicket,this.ticket)
  }

}
