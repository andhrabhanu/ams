import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class RequestService {

  constructor(public http:Http) { }

  addRequest(info){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/servicerequests/add', info)
          .subscribe(res => {
            let data = res.json();
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

  getRequests(){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/api/properties')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  getRequestByUniqueId(id){
    return new Promise((resolve, reject) => {
    this.http.get("http://localhost:8080/api/servicerequests/request/"+id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          console.log('Inside GET Request By UniqueId');
        }, (err) => {
        });
    });
  }
  


getProperties(info){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/properties/ofmanager', info)
          .subscribe(res => {
            let data = res.json();
           
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

getOpenRequests(){
  //console.log('HERE  '+JSON.stringify(info));

  return new Promise((resolve, reject) => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/servicerequests/open', {headers:headers})
        .subscribe(res => {
          let data = res.json();
         resolve(data);
        }, (err) => {
          reject(err);
        });
  })
}

getCloseRequests(){
  //console.log('HERE  '+JSON.stringify(info));
  return new Promise((resolve, reject) => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/servicerequests/closed', {headers:headers})
        .subscribe(res => {
          let data = res.json();
         resolve(data);
        }, (err) => {
          reject(err);
        });
  })
}

getLeaseIdByPropId(info){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/leases/getLeaseId', info)
          .subscribe(res => {
            let data = res.json();
          
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

updateRequest(info){
return new Promise((resolve, reject) => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    this.http.put('http://localhost:8080/api/servicerequests/updateRequest', info)
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
  })
}


  getTenants(){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/tenants/', {headers:headers})
          .subscribe(res => {
            let data = res.json();
            resolve(data);
          }, (err) => {
            reject(err);
          });
    })
  }
}
