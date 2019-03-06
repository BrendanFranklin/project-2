import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [TicketPageComponent],
  imports: [
    GlobalModule,
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
