import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TenantService {

  constructor(public http:Http) { }

  /*  addTenant(info){
    return this.http.post("http://localhost:8080/api/tenants/add",info)
        .map(res => res.json());
  } */

  addTenant(info){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/tenants/add', info)
          .subscribe(res => {
            let data = res.json();
            resolve(data);
          }, (err) => {
            reject(err);
          });
    })
  }

  /* getUnLeasedTenants(){
    let headers = new Headers();
       headers.append('Content-Type', 'application/json');
   return this.http.post("http://localhost:8080/api/tenants/getUnLeased", {headers: headers})
       .map(res => res.json());
 } */

  getUnLeasedTenants(info){
  //console.log('HERE  '+JSON.stringify(info));

    return new Promise((resolve, reject) => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/tenants/manager/unleased',info)
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
  })
  }
  
  getTenant(uniqId){
    return new Promise((resolve, reject) => {
    this.http.get("http://localhost:8080/api/tenants/findbyunique/"+uniqId)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
         // console.log('Inside GET Properties');
        }, (err) => {
        });
    });
  }

  getLeasedTenants(info){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/tenants/manager/leased',info)
          .subscribe(res => {
            let data = res.json();
            resolve(data);
          }, (err) => {
            reject(err);
          });
    })
  }
 }
