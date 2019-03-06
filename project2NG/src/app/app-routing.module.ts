import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'maintenance',
    loadChildren: './maintenance/maintenance.module#MaintenanceModule'
  },
  {
    path: 'resident',
    loadChildren: './resident/resident.module#ResidentModule'
  },
  {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule'
  },
  {
    path: 'ticketdeets',
    component: TicketDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
