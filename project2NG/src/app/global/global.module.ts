import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketlistComponent} from '../components/ticketlist/ticketlist.component';
import { LogoutbarComponent } from '../components/logoutbar/logoutbar.component';
import {UserlistComponent} from '../components/userlist/userlist.component';
import {ApartmentlistComponent} from '../components/apartmentlist/apartmentlist.component';
import {RentlistComponent} from '../components/rentlist/rentlist.component';
import {ApplicationlistComponent} from '../components/applicationlist/applicationlist.component';
import {MaintformComponent} from '../components/maintform/maintform.component';


@NgModule({
  declarations: [
      MaintformComponent,
      ApplicationlistComponent,
      ApartmentlistComponent,
      RentlistComponent,
      UserlistComponent,
      TicketlistComponent,
      LogoutbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
      MaintformComponent,
      ApplicationlistComponent,
      ApartmentlistComponent,
      RentlistComponent,
      UserlistComponent,
      TicketlistComponent,
      LogoutbarComponent,

  ]
})
export class GlobalModule { }
