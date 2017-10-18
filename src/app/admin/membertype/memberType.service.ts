import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class MemberTypeService {

  authToken: any;
  admin: any;

  constructor(private http:Http) { }





//Add Floor
addmembertype(info){
  //console.log('HERE  '+JSON.stringify(info));

    return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/admin/addmembertype', info)
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
})
}

//Get Member Types
getMemberTypes(info){
//console.log('HERE  '+JSON.stringify(info));

  return new Promise((resolve, reject) => {
let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  this.http.post('http://localhost:8080/api/admin/membertypes', info)
      .subscribe(res => {
        let data = res.json();
       
        resolve(data);
      }, (err) => {
        reject(err);
      });
})
}

//Get property By UNiqid
getFloor(uniqId){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  this.http.post("http://localhost:8080/api/floors/floor/"+uniqId,{headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
       // console.log('Inside GET Properties');
      }, (err) => {
      });
  });
}
updateFloor(info){
  //console.log('HERE  '+JSON.stringify(info));

    return new Promise((resolve, reject) => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    this.http.put('http://localhost:8080/api/floors/update', info)
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
})
}
}
