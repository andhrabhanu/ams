import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class SuperAdminService {

  authToken: any;
  superAdmin: any;

  constructor(private http:Http) { }

  //Register User
  registerUser(info){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/superadmin/register', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
    })
}

//Add Admin
addAdmin(info){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/superadmin/addadmin', info)
          .subscribe(res => {
            let data = res.json();
          
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

//Get Unassigned Apartments
getUnassignedApartments(){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/apartments/unassigned',{headers:headers})
          .subscribe(res => {
            let data = res.json();
          
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

//Assign Apartment
assignApartment(info){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/apartments/assign', info)
          .subscribe(res => {
            let data = res.json();
          resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

//Add City
//Assign Apartment
addCity(info){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/superadmin/addcity/', info)
          .subscribe(res => {
            let data = res.json();
          resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}
//Get All Admins
getCities(){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/superadmin/getcities',{headers:headers})
          .subscribe(res => {
            let data = res.json();
          
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

//Get All Admins
getAdmins(){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/superadmin/addadmin',{headers:headers})
          .subscribe(res => {
            let data = res.json();
          
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

//Login User
authenticateUser(info){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/superadmin/login', info)
          .subscribe(res => {
            let data = res.json();
          
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}




//Store Token and Admin Data
storeSuperAdminData(token,superAdmin){
  localStorage.setItem('superAdmin_token',token);
  //Converting object to String
  localStorage.setItem('superAdmin',JSON.stringify(superAdmin));
  this.authToken = token;
  this.superAdmin = superAdmin;
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
  const token = localStorage.getItem('superAdmin_token');
  this.authToken = token;
}

loggedIn(){
 return tokenNotExpired('superAdmin_token');
}

logout(){
  this.authToken=null;
  this.superAdmin=null;
  localStorage.clear();
}



}
