import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../models/ticket';


@Component({
  selector: 'app-maintform',
  templateUrl: './maintform.component.html',
  styleUrls: ['./maintform.component.css']
})
export class MaintformComponent implements OnInit {

  ticket: Ticket;

  constructor() {
  }

  ngOnInit() {

  }

}
