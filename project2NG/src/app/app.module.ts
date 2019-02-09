import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoutbarComponent } from './components/logoutbar/logoutbar.component';
import { TicketlistComponent } from './components/ticketlist/ticketlist.component';
import { DetailsmodalComponent } from './components/detailsmodal/detailsmodal.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoutbarComponent,
    TicketlistComponent,
    DetailsmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
