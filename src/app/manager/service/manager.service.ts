import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class ManagerService {

    authToken: any;
    manager: any;

    constructor(private http:Http) { }

    //Register Manager
  registerManager(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/manager/register', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
  }

 

  //Login Manager
  authenticateManager(info){
    console.log(JSON.stringify(info,null,4));
    return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/manager/login', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
    })
  }

   //Add ServiceResource
   addServiceResource(info){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/manager/addServiceResource', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
    })
  }


  //Get ServiceResources
  getServiceResources(info){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/manager/getServiceResources', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
    })
  }

    //Get Service Resources
  getServiceResourceByUniqId(uniqId){
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:8080/api/manager/viewresource/"+uniqId)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
           // console.log('Inside GET Properties');
          }, (err) => {
          });
      });
    }

  getServiceCategories(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/allservicecategories', {headers:headers})
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
    })
  }

  //Store Token and Admin Data
    storeManagerData(token,manager){
    localStorage.setItem('manager_token',token);
    //Converting object to String
    localStorage.setItem('manager',JSON.stringify(manager));
    this.authToken = token;
    this.manager = manager;
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3500/users/profile',{headers:headers})
    .map(res=>res.json());

  }

  loadToken(){
    const token = localStorage.getItem('manager_token');
    this.authToken = token;
  }

  loggedIn(){
  return tokenNotExpired('manager_token');
  }

  logout(){
    this.authToken=null;
    this.manager=null;
    localStorage.clear();
  }
}
