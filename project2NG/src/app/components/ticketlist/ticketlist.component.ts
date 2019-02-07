import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  detailView(ticket: Ticket){
    const modalRef = this.modalService.open(DetailsmodalComponent)
    modalRef.componentInstance.ticket = ticket;
  }
}
