import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Ticket} from '../../models/ticket';
import { TickethandlerService } from 'src/app/services/tickethandler.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-maintform',
  templateUrl: './maintform.component.html',
  styleUrls: ['./maintform.component.css']
})
export class MaintformComponent implements OnInit {

  ticket: Ticket;
  apt_num: number;
  description: string;
  @Output() newTicket: EventEmitter<any> = new EventEmitter();
  constructor(private ticketService: TickethandlerService) {
  }

  ngOnInit() {

  }

  submit(){
    this.ticketService.makeTicket(environment.everybodyMakeTicket, {apt_num: this.apt_num,
    description: this.description, author: localStorage.getItem('userId'), resolved: false},()=>{this.newTicket.emit()} )
  }

}
