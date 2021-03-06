import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { RentHandlerService } from '../services/rent-handler.service';
import { environment } from 'src/environments/environment';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.css']
})
export class RentPageComponent implements OnInit {

  payments: Payment[]

  constructor(private renthandler: RentHandlerService) { }

  ngOnInit() {
    this.getRent();
  }

  getRent(){
    this.renthandler.getRent(environment.managerGetRent,
      (payments)=>{this.payments = payments},
      ()=>{})
  }

  update(update: Payment){
    this.renthandler.updateRent(update, environment.managerUpdateRent, ()=>{this.getRent()} )
  }

}
