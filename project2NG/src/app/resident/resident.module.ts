import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentRoutingModule } from './resident-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ApartmentdetailspageComponent } from './apartmentdetailspage/apartmentdetailspage.component';
import { TicketpageComponent } from './ticketpage/ticketpage.component';
import { TicketlistComponent } from '../components/ticketlist/ticketlist.component';


@NgModule({
  declarations: [ApartmentdetailspageComponent, TicketpageComponent],
  imports: [
    CommonModule,
    ResidentRoutingModule,
    HttpClientModule,
    TicketlistComponent
  ]
})
export class ResidentModule { }
