import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { Ticket } from 'src/app/models/ticket';
import { TickethandlerService } from 'src/app/services/tickethandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  @Input() tickets: Ticket[];
  @Input() manager: boolean;
  @Output() resolveTicket: EventEmitter<Ticket> = new EventEmitter();

  constructor(private ticketHandler: TickethandlerService,
    private router: Router) { }

  ngOnInit() {
  }

  detailView(ticket: Ticket){
    this.ticketHandler.detailTicket = ticket;
    this.router.navigate(['/ticketdeets'])

    
  }
}
