import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appartmentlist',
  templateUrl: './appartmentlist.component.html',
  styleUrls: ['./appartmentlist.component.css']
})
export class AppartmentlistComponent implements OnInit {

  @Input() studioNum: number;
  @Input() oneBedNum: number;

  constructor() { }

  ngOnInit() {
  }

}
