import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-detailsmodal',
  templateUrl: './detailsmodal.component.html',
  styleUrls: ['./detailsmodal.component.css']
})
export class DetailsmodalComponent implements OnInit {
  @Input() ticket: Ticket;
  @Input() employee: boolean;
  @Output() resolveTicket: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  resolve(){
    this.resolveTicket.emit(this.ticket);
  }

}
