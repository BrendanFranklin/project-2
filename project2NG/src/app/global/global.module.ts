import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketlistComponent} from '../components/ticketlist/ticketlist.component';
import { LogoutbarComponent } from '../components/logoutbar/logoutbar.component';
import { DetailsmodalComponent } from '../components/detailsmodal/detailsmodal.component';
import {UserlistComponent} from '../components/userlist/userlist.component';


@NgModule({
  declarations: [
      UserlistComponent,
      TicketlistComponent,
  LogoutbarComponent,
  DetailsmodalComponent],
  imports: [
    CommonModule
  ],
  exports: [
      UserlistComponent,
      TicketlistComponent,
      LogoutbarComponent,
      DetailsmodalComponent,

  ]
})
export class GlobalModule { }
