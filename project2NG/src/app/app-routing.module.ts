import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path:'maintenance',
    loadChildren: './maintenance/maintenance.module#MaintenanceModule'
  },
  {
    path: 'resident',
    loadChildren: './resident/resident.module#ResidentModule'
  },
  {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
