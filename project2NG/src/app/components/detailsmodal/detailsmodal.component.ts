import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-detailsmodal',
  templateUrl: './detailsmodal.component.html',
  styleUrls: ['./detailsmodal.component.css']
})
export class DetailsmodalComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
