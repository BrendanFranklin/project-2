import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { ProspecthandlerService} from '../../services/prospecthandler.service'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.css']
})
export class AppformComponent implements OnInit {

  application: Application

  constructor(private prospectHandler: ProspecthandlerService,
    private router: Router) { }

  ngOnInit() {
    this.application = new Application("","","","")
  }

  submit(){
    this.prospectHandler.submitApplication(environment.publicSubmitApp,this.application);
    this.router.navigate([''])
  }


}
