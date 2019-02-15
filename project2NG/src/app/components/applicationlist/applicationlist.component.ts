import { Component, OnInit, Input } from '@angular/core';
import { Application } from 'src/app/models/application';

@Component({
  selector: 'app-applicationlist',
  templateUrl: './applicationlist.component.html',
  styleUrls: ['./applicationlist.component.css']
})
export class ApplicationlistComponent implements OnInit {

  @Input() apps: Application[];
  constructor() { }

  ngOnInit() {
  }

}
