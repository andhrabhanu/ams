import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class UnitService {
constructor(private http:Http) { }

//Add Unit
addUnit(info){
    return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/units/add', info)
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
  })
}
//Get all floors
getFloors(info){
  //console.log('HERE  '+JSON.stringify(info));
  
    return new Promise((resolve, reject) => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/floors/ofApartment', info)
        .subscribe(res => {
          let data = res.json();
         
          resolve(data);
        }, (err) => {
          reject(err);
        });
  })
  }

//Get Units
getUnits(info){
//console.log('HERE  '+JSON.stringify(info));

  return new Promise((resolve, reject) => {
let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  this.http.post('http://localhost:8080/api/units/ofApartment', info)
      .subscribe(res => {
        let data = res.json();
       
        resolve(data);
      }, (err) => {
        reject(err);
      });
})
}

//Get Unit By UNiqid
getUnit(uniqId){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  this.http.post("http://localhost:8080/api/units/unit/"+uniqId,{headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
       // console.log('Inside GET Properties');
      }, (err) => {
      });
  });
}

updateUnit(info){
  //console.log('HERE  '+JSON.stringify(info));

    return new Promise((resolve, reject) => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    this.http.put('http://localhost:8080/api/units/update', info)
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
})
}
}
