import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class AdminService {

  authToken: any;
  admin: any;

  constructor(private http:Http) { }

      //Register User
    registerUser(info){
        return new Promise((resolve, reject) => {
          let headers = new Headers();
              headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:8080/api/admin/register', info)
                .subscribe(res => {
                  let data = res.json();
                
                  resolve(data);
                }, (err) => {
                  reject(err);
                });
        })
    }
    getMonthlyFund(uniqId){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post("http://localhost:8080/api/admin/monthly/"+uniqId,{headers:headers})
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          }, (err) => {
          });
      });
    }

    //Get Member Types
    getDesignations(info){
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

    //Update to Funds Table
    

    //Update Total Fund
    updateTotalFund(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/updateTotalFund/', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }

    //Get Funds
    getFunds(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/funds/', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }
    //Get Funds Total
    getFundsTotal(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/getTotalFund/', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }

      //Get Corpus Funds Total
      getCorpusFundsTotal(info){
        //console.log('HERE  '+JSON.stringify(info));
        
          return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/getTotalCorpusFund', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
        })
      }

       //Update Corpus Funds Total
       updateTotalCorpusFund(info){
        //console.log('HERE  '+JSON.stringify(info));
        
          return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/updateTotalCorpusFund', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
        })
      }


    
      //Create Total Fund
    createTotalFund(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/createTotalFund/', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }

    // Send Message
    sendMessage(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/sendmessage', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }

    //Create TotalCorpusFund
    createTotalCorpusFund(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/createTotalCorpusFund/', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }


    //Get Employees 
    getEmployees(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/employees', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }

    //Add Owner
    addOwner(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addowner', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Corpus Fund
    addCorpusFund(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addcorpusfund', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    ListCorpusFund(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/corpusfunds', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Year
    addYear(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addyear', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Month
    addMonth(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addmonth', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add BillType
    addBillType(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addbilltype', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Bill
    addBill(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addbill', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Fund
    addFund(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addfund', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Maintenance
    addMaintenance(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addmaintenance', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add EmployeeSalary
    addEmployeeSalary(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addsalary', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get Employee Salaries
    getEmployeeSalaries(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/salaries/', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get Maintenances
    getMaintenances(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/maintenances', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Get Bills
    getBills(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/bills', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Get Years
    getYears(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/years', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Get BillTypes
    getBillTypes(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/billtypes', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Get Months
    getMonths(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/months', info)
              .subscribe(res => {
                let data = res.json();
              resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Add Floor
    addFloor(info){
      //console.log('HERE  '+JSON.stringify(info));

        return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/floors/add', info)
            .subscribe(res => {
              let data = res.json();
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }
    //Add Employee
    addEmployee(info){
      //console.log('HERE  '+JSON.stringify(info));

        return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/addemployee', info)
            .subscribe(res => {
              let data = res.json();
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
    }
    //Get Floors
    getFloors(){
      //console.log('HERE  '+JSON.stringify(info));

      return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/floors/', {headers:headers})
          .subscribe(res => {
            let data = res.json();
          
            resolve(data);
          }, (err) => {
            reject(err);
          });
      })
    }
    //Get Owners
    getOwners(info){
      //console.log('HERE  '+JSON.stringify(info));
      
        return new Promise((resolve, reject) => {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/api/admin/owners', info)
            .subscribe(res => {
              let data = res.json();
            
              resolve(data);
            }, (err) => {
              reject(err);
            });
      })
      }

    //Add Service Category
    addServiceCategory(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addServiceCategory', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Get All Managers
    getManagers(){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/managers',{headers:headers})
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Get All Unassigned Units
    getUnits(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/units/unassignedunits',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get all Units of Apartment
    getAllUnits(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/units/ofApartment',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

      //Get Open Complaints
      getOpenComplaints(info){
        return new Promise((resolve, reject) => {
          let headers = new Headers();
              headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:8080/api/complaints/open',info)
                .subscribe(res => {
                  let data = res.json();
                
                  resolve(data);
                }, (err) => {
                  reject(err);
                });
        })
      }

      addReplyandClose(info){
        return new Promise((resolve, reject) => {
          let headers = new Headers();
              headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:8080/api/complaints/addReply',info)
                .subscribe(res => {
                  let data = res.json();
                
                  resolve(data);
                }, (err) => {
                  reject(err);
                });
        })
      }

      //Get Closed Complaints
      getClosedComplaints(info){
        return new Promise((resolve, reject) => {
          let headers = new Headers();
              headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:8080/api/complaints/closed',info)
                .subscribe(res => {
                  let data = res.json();
                
                  resolve(data);
                }, (err) => {
                  reject(err);
                });
        })
      }

     //Add Monthly Fund
     addMonthlyFund(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addmonthlyfund',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Management 
    addManagement(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/addmanagement/',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get All Management
    getAllManagement(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/allmanagement/',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get All Monthly Funds
    getMonthlyFunds(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/monthlyfunds',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get Floors Count
    getFloorsCount(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/floorscount/',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get Floors Count
    SendForgotPasswordEmail(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/forgotpassword',info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Reset Password
    ResetPasswordEmail(info,token){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/reset/'+token,info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get Units Count
    getUnitsCount(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/unitscount/',info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Get Owners Count
     getOwnersCount(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/ownerscount/',info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

    //Add Complaint
    addComplaint(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/complaints/add',info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }

     //Get Owners Count
     getEmployeesCount(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/admin/employeescount/',info)
              .subscribe(res => {
                let data = res.json();
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Assign Unit means update Unit to 1
    assignUnit(info){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
          this.http.post('http://localhost:8080/api/units/assignunit',info)
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
          this.http.post('http://localhost:8080/api/admin/login', info)
              .subscribe(res => {
                let data = res.json();
              
                resolve(data);
              }, (err) => {
                reject(err);
              });
      })
    }
    //Store Token and Admin Data
    storeAdminData(token,admin){
      localStorage.setItem('admin_token',token);
      //Converting object to String
      localStorage.setItem('admin',JSON.stringify(admin));
      this.authToken = token;
      this.admin = admin;
    }
    getProfile(){
      let headers = new Headers();

      this.loadToken();
      headers.append('Authorization',this.authToken);
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3500/users/profile',{headers:headers})
      .map(res=>res.json());

    }

    getComplaint(uniqId){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      this.http.post("http://localhost:8080/api/complaints/complaint/"+uniqId,{headers:headers})
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
           // console.log('Inside GET Properties');
          }, (err) => {
          });
      });
    }
    

    loadToken(){
      const token = localStorage.getItem('admin_token');
      this.authToken = token;
    }

    loggedIn(){
    return tokenNotExpired('admin_token');
    }

    logout(){
      this.authToken=null;
      this.admin=null;
      localStorage.clear();
    }

    checkifLoggedIn(){
      if(this.authToken==null){
        console.log('Logged Out');
        return false;
      }
      else{
        console.log('logged In');
        return true;
      }
   
    }
    
}
