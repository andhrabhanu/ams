import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HomeService {

  constructor(public http:Http) { }


    //Properties
   getProperties(){
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

  getLeasedProperties(){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/api/properties/leasedProperties')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  

  getUnLeasedProperties(){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/api/properties/unleasedProperties')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
      
  /*  addProperty(info){
    return this.http.post("http://localhost:8080/api/properties/add",info)
        .map(res => res.json());
  } */

  addProperty(info){
        //console.log('HERE  '+JSON.stringify(info));

          return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/properties/add', info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
  }

  updateProperty(info){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.put('http://localhost:8080/api/properties/update/', info)
          .subscribe(res => {
            let data = res.json();
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

  findById(info){
    //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/properties/property/find', info)
          .subscribe(res => {
            let data = res.json();
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
}

  getPropLease(info){
       
          
          return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/leases/getPropLease', info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
  }  
  /* addLease(info){
    return this.http.post("http://localhost:8080/api/leases/add",info)
        .map(res => res.json());
  } */
   addLease(info){
     return new Promise((resolve, reject) => {
     let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/leases/add', info)
          .subscribe(res => {
            let data = res.json();
            resolve(data);
          }, (err) => {
            reject(err);
          });
  })
   }    
   /* updateTenantStatus(info){
     return this.http.put("http://localhost:8080/api/tenants/updatetenantStatus/",info)
        .map(res => res.json());
  } */
    updateTenantStatus(info){
        console.log('HERE  '+JSON.stringify(info));

          return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.put('http://localhost:8080/api/tenants/updatetenantStatus/', info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
  }
    updatePropertyStatus(info){
        console.log('HERE  '+JSON.stringify(info));

          return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.put('http://localhost:8080/api/properties/updatepropertyStatus/', info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
  }
  

          
  getUnLeasedTenants(){
     let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:8080/api/tenants/getUnLeased", {headers: headers})
        .map(res => res.json());
  }
  getProperty(uniqid){
    return new Promise((resolve, reject) => {
    this.http.get("http://localhost:8080/api/properties/property/"+uniqid)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
         // console.log('Inside GET Properties');
        }, (err) => {
        });
    });
  }

  getPropertyById(id){
    return new Promise((resolve, reject) => {
    this.http.get("http://localhost:8080/api/properties/propertybyID/"+id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          console.log('Inside GET Properties By Id');
        }, (err) => {
        });
    });
  }
  
  
   /*  updateProperty(id, info){   
    return this.http.put("http://localhost:8080/api/properties/update/"+id,info)
        .map(res => res.json());
  } */
       updateGalleryProperty(id, info){   
    return this.http.put("http://localhost:8080/api/properties/updateGallery/"+id,info)
        .map(res => res.json());
  }

  deleteProperty(id){
    return this.http.delete("http://localhost:8080/api/properties/delete/"+id)
        .map(res => res.json());
  }






}
