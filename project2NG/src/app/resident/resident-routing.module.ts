import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ApartmentdetailspageComponent} from './apartmentdetailspage/apartmentdetailspage.component';
import {TicketpageComponent} from './ticketpage/ticketpage.component';

const routes: Routes = [
{
path: '',
component: ApartmentdetailspageComponent
},
{
  path: 'maintenance',
  component: TicketpageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule { }
