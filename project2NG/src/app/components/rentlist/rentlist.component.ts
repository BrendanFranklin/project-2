import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.css']
})
export class RentlistComponent implements OnInit {

  @Input() payments: Payment[]
  @Output() updatePayment: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update(change: number, payment: Payment){
    if(change == 1){
      payment.overdue = true;
    }
    if(change == 2){
      payment.paid = true;
    }
    this.updatePayment.emit(payment)

  }

}
