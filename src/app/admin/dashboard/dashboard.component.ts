import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from '../service/admin.service';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public apartmentId:any;
  public floorsdata:any;
  public fundsTotal:any;
  public fundsData:any;
  public corpusfundTotal:any;
  public corpusfundData:any;
  public unitsdata:any;
  public ownersdata:any;
  public employeesdata:any;

  public floorsCount:any;public unitsCount:any; public ownersCount:any;public employeesCount:any;
  constructor(private router: Router,
    private adminService:AdminService,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
      this.getFloorsCount();
      this.getUnitsCount();
      this.getEmployeesCount();
      this.getOwnersCount();
      this.getFundsTotal();
      this.getCorpusFundsTotal();

    }

    getFloorsCount(){
      let apartmentDetails = {
      
        apartmentId: this.apartmentId
      };
      this.adminService.getFloorsCount(apartmentDetails).then((data) => {
        this.floorsdata = data;
        this.floorsCount = this.floorsdata.floors
        console.log('Floors '+this.floorsCount)
        }, (err) => {
           console.log(err);
        
         }); 
    }
    getFundsTotal(){
      let apartmentDetails = {
      
        apartmentId: this.apartmentId
      };
      console.log(apartmentDetails.apartmentId);
      this.adminService.getFundsTotal(apartmentDetails).then((data) => {
        this.fundsData = data;
        //this.fundsTotal = this.fundsData;
        this.fundsData.forEach(element => {

         this.fundsTotal = element.totalFund
           });

        console.log('Total Funds '+this.fundsTotal);
       
        }, (err) => {
           console.log(err);
        
         }); 
    }
    getCorpusFundsTotal(){
      let apartmentDetails = {
      
        apartmentId: this.apartmentId
      };
      console.log(apartmentDetails.apartmentId);
      this.adminService.getCorpusFundsTotal(apartmentDetails).then((data) => {
        this.corpusfundData = data;
        this.corpusfundData.forEach(element => {

         this.corpusfundTotal = element.totalCorpusFund
           });

        console.log('Total Corpus Funds '+this.corpusfundTotal);
       
        }, (err) => {
           console.log(err);
        
         }); 
    }
    getUnitsCount(){
      let apartmentDetails = {
          apartmentId: this.apartmentId
      };
      this.adminService.getUnitsCount(apartmentDetails).then((data) => {
        this.unitsdata = data;
        this.unitsCount = this.unitsdata.units
        console.log('Units '+this.unitsCount)
        }, (err) => {
           console.log(err);
      }); 
    }
    getOwnersCount(){
      let apartmentDetails = {
        apartmentId: this.apartmentId
    };
    this.adminService.getOwnersCount(apartmentDetails).then((data) => {
      this.ownersdata = data;
      this.ownersCount = this.ownersdata.owners
      console.log('Owners '+this.ownersCount)
      }, (err) => {
         console.log(err);
    });
    }

    getEmployeesCount(){
      let apartmentDetails = {
        apartmentId: this.apartmentId
    };
    this.adminService.getEmployeesCount(apartmentDetails).then((data) => {
      this.employeesdata = data;
      console.log(this.employeesdata)
      this.employeesCount = this.employeesdata.employees
      console.log('Employees '+this.employeesCount)
      }, (err) => {
         console.log(err);
    });
    }

    openSnackBar(message) {
      this.snackBar.open(message, 'Close', { duration: 5000});
    }

 

}
