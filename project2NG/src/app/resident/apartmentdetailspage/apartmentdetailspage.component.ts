import { Component, OnInit } from '@angular/core';

import {Apartment} from "../../models/apartment";

import {Payment} from "../../models/payment";



@Component({

  selector: 'app-apartmentdetailspage',

  templateUrl: './apartmentdetailspage.component.html',

  styleUrls: ['./apartmentdetailspage.component.css']

})

export class ApartmentdetailspageComponent implements OnInit {



  apartment: Apartment;

  payment: Payment;



  constructor() { }



  ngOnInit() {

  }

getApt(){}

getPayment(){}

}