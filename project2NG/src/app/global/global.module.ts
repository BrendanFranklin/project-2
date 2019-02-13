import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketlistComponent} from '../components/ticketlist/ticketlist.component';

@NgModule({
  declarations: [TicketlistComponent],
  imports: [
    CommonModule
  ],
  exports: [
      TicketlistComponent
  ]
})
export class GlobalModule { }
