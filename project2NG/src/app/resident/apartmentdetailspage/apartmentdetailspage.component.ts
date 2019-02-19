import { Component, OnInit } from '@angular/core';

import {Apartment} from "../../models/apartment";

import {Payment} from "../../models/payment";
import { getAppInitializer } from '@angular/router/src/router_module';
import { ResidentHandlerService } from '../services/resident-handler.service';
import { environment } from 'src/environments/environment';



@Component({

  selector: 'app-apartmentdetailspage',

  templateUrl: './apartmentdetailspage.component.html',

  styleUrls: ['./apartmentdetailspage.component.css']

})

export class ApartmentdetailspageComponent implements OnInit {



  apartment: Apartment = new Apartment(0,'',0,false);

  payment: Payment = new Payment(0,0,false,false);



  constructor(private residentHandler: ResidentHandlerService) { }



  ngOnInit(
  ) {
    this.getApt();
    this.getPayment();

  }

getApt(){
this.residentHandler.getApt(environment.residentGetApt,(apt: Apartment)=>{this.apartment= apt;})
}

getPayment(){
this.residentHandler.getRent(environment.residentGetRentDetails,(payment: Payment)=>{this.payment = payment})
}
}