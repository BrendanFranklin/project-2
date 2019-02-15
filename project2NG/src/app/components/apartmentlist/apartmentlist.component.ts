import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-apartmentlist',
  templateUrl: './apartmentlist.component.html',
  styleUrls: ['./apartmentlist.component.css']
})
export class ApartmentlistComponent implements OnInit {
  
  @Input()apts: Apartment[]

  constructor() { }

  ngOnInit() {
  }

}
