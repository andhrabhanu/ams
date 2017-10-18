import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


//Main Server
//52.66.125.232


/*
  Generated class for the AllServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AllServices {
data:any;
  constructor(public http: Http) {
    this.data = {};
   // console.log('Hello AllServices Provider');
  }
  

     getCities(){

    return new Promise((resolve, reject) => {

  this.http.get('http://52.66.125.232/api/categories')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
         // console.log('Inside GET CITIES');
        }, (err) => {
          reject(err);
        });
    });

  }

  getProperties(){

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/api/properties')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          console.log('Inside GET Properties');
        }, (err) => {
          reject(err);
        });
    });

  }

  getCategories(){

    return new Promise((resolve, reject) => {



      this.http.get('http://52.66.125.232/api/categories')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
         // console.log('Inside GET Categories');
        }, (err) => {
          reject(err);
        });
    });

  }

  getSubCategories(){

    return new Promise((resolve, reject) => {
    this.http.get('http://192.168.1.116:8080/api/subcategories/')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
         // console.log('Inside GET SubCategories');
        }, (err) => {
          reject(err);
        });
    });

  }


}
