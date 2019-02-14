import { Component, OnInit } from '@angular/core';
import { ProspecthandlerService } from '../services/prospecthandler.service';
import { environment } from 'src/environments/environment';
import { Apartment} from '../../models/apartment'

@Component({
  selector: 'app-prospectivepage',
  templateUrl: './prospectivepage.component.html',
  styleUrls: ['./prospectivepage.component.css']
})
export class ProspectivepageComponent implements OnInit {

  studioNum: number;
  oneBedNum: number;

  constructor(private prospecthandler: ProspecthandlerService ) { }

  async ngOnInit() {
    await this.getOpenApartments();
  }
  getOpenApartments(){
    this.prospecthandler.getOpenAppartments(environment.publicOpenApts,
       (apartments: Apartment[])=>
       {this.studioNum = 0;
        this.oneBedNum = 0;
         apartments.forEach(apartment =>
        {if(apartment.apt_style=="studio"){
          this.studioNum++;
        }if(apartment.apt_style=="1-bedroom"){
          this.oneBedNum++;
        }
      })},
       (err)=>console.log(err))

  }

}
