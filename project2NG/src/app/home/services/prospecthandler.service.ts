import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Application} from '../../models/application'
import { Apartment } from 'src/app/models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ProspecthandlerService {

  constructor(
    private http: HttpClient
  ) { }
  getOpenAppartments(url: string, success, fail ){
    this.http.get<any>(url
    ).toPromise().then((resp)=>{
      let apartments: Apartment[]=[];
      resp.forEach(apartment=>{
        let newAp = new Apartment(
          apartment[0],
          apartment[1],
          apartment[2],
          apartment[3]
        )
        apartments.push(newAp)
      })
    
    success(apartments)
  },
     fail())
  }

  submitApplication(url: string, application){
    this.http.post<any>(url, JSON.stringify(application),{headers:{'Content-Type': 'application/json'}}).subscribe();
  }



}
