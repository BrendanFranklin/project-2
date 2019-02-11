import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { DetailsmodalComponent } from '../detailsmodal/detailsmodal.component';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  @Input() tickets: Ticket[];
  @Input() employee: boolean;
  @Output() resolveTicket: EventEmitter<Ticket> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  detailView(ticket: Ticket){
    const modalRef = this.modalService.open(DetailsmodalComponent)
    modalRef.componentInstance.ticket = ticket;
    modalRef.componentInstance.employee = this.employee;
    modalRef.componentInstance.resolveTicket.subscribe((ticket)=>{
      this.resolveTicket.emit(ticket);
    })
  }
}
