import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApartmentsPageComponent} from './apartments-page/apartments-page.component';
import {ApplicationsPageComponent} from './applications-page/applications-page.component';
import {RentPageComponent} from './rent-page/rent-page.component';
import {ManagerhomeComponent} from './managerhome/managerhome.component';
import {ManmaintComponent} from './manmaint/manmaint.component';

const routes: Routes = [
  { path: 'apts',
    component: ApartmentsPageComponent},
  { path: 'apps',
    component: ApplicationsPageComponent},
  { path: 'rent',
    component: RentPageComponent},
  { path: 'home',
    component: ManagerhomeComponent},
  { path: '', redirectTo: 'home',
    pathMatch: 'full'},
  { path: 'maint',
    component: ManmaintComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
