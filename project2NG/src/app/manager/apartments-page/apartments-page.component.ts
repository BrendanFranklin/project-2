import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentHandlerService } from '../services/apartment-handler.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-apartments-page',
  templateUrl: './apartments-page.component.html',
  styleUrls: ['./apartments-page.component.css']
})
export class ApartmentsPageComponent implements OnInit {

  apts: Apartment[];
  constructor(private aptHandler: ApartmentHandlerService) { }

  ngOnInit() {
    this.getApts()
  }

  getApts(){
    this.aptHandler.getApts(environment.managerGetApt,
      (apts)=>{this.apts = apts},()=>{});
  }
}
