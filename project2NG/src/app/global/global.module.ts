import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketlistComponent} from '../components/ticketlist/ticketlist.component';
import { LogoutbarComponent } from '../components/logoutbar/logoutbar.component';
import { DetailsmodalComponent } from '../components/detailsmodal/detailsmodal.component';

@NgModule({
  declarations: [TicketlistComponent,
  LogoutbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
      TicketlistComponent,
      LogoutbarComponent,
      DetailsmodalComponent
  ]
})
export class GlobalModule { }
