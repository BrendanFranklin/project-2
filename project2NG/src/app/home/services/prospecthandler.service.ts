import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Application} from '../../models/application'

@Injectable({
  providedIn: 'root'
})
export class ProspecthandlerService {

  constructor(
    private http: HttpClient
  ) { }
  getOpenAppartments(url: string, success, fail ){
    this.http.get(url).toPromise().then((resp)=>
    {success(resp)},
     fail())
  }

  submitApplication(url: string, application: Application){
    this.http.put<Application>(url, JSON.stringify(application)).subscribe();
  }



}
