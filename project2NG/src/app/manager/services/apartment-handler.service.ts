import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Apartment } from 'src/app/models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentHandlerService {

  constructor(private http: HttpClient) { }

  getApts(url, success, fail){
    this.http.get<any>(url,
      {headers:{'Authorization': localStorage.getItem('userToken')}})
      .toPromise().then(
        (resp)=>{
          let apts: Apartment[] = [];
          resp.forEach(apt=>{
            apts.push(this.parseApt(apt))
          })
          success(apts);
        }),
        fail();
  }
  
  parseApt(apt){
    let newAp = new Apartment(
      apt[0],
      apt[1],
      apt[2],
      apt[3]
    )
    return newAp;
  }
}
