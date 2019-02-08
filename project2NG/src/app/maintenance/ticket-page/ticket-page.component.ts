import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {

  manager = true;

  constructor() { }

  ngOnInit() {
  }
  resolve(ticket: Ticket){
    console.log(ticket);
    //TODO connect it to http
  }
}
