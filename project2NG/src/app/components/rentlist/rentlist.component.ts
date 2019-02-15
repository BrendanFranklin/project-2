import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.css']
})
export class RentlistComponent implements OnInit {

  @Input() payments: Payment[]

  constructor() { }

  ngOnInit() {
  }

  update(change: string, payment: Payment){
    
  }

}
