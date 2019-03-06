import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { ApplicationHandlerService } from '../services/application-handler.service';
import { getAppInitializer } from '@angular/router/src/router_module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.css']
})
export class ApplicationsPageComponent implements OnInit {
  apps: Application[]
  constructor( private appService: ApplicationHandlerService) { }

  ngOnInit() {
    this.getApps();
  }
getApps(){
this.appService.getAllApps(environment.managerGetApps,
  (apps)=>{this.apps = apps},
  ()=>{});
}
}
