import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-employee-salary',
  templateUrl: './add-employee-salary.component.html',
  styleUrls: ['./add-employee-salary.component.css']
})
export class AddEmployeeSalaryComponent{

  public employees:any;
  public designations:any;
  public fundsTotal:any;
  public fundsData:any;
  public years:any;
  public balanceAmount:any;
  public months:any;
  public apartmentId:any;
  employee = new FormControl('', [
            Validators.required,
            ]);
designation = new FormControl('', [
              Validators.required,
    ]);          
  year = new FormControl('', [
            Validators.required,
  ]);
  month = new FormControl('', [
            Validators.required,
  ]);

  amount = new FormControl('', [
            Validators.required,
  ]);
  date = new FormControl('', [
          Validators.required,
  ]);
  
  salaryForm = new FormGroup({
    employee:this.employee,
    designation:this.designation,
    month: this.month,
    year:this.year,
    amount:this.amount,
    date:this.date,
 
  });

  constructor(public adminService:AdminService,
  public route:ActivatedRoute,
  public router:Router,private _fb: FormBuilder,
  public snackBar: MdSnackBar) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;
    this.getEmployees();
    this.getDesignations();
    this.getYears();
    this.getMonths();
    this.getFundsTotal();
  }
  getFundsTotal(){
    let apartmentDetails = {
    
      apartmentId: this.apartmentId
    };
    this.adminService.getFundsTotal(apartmentDetails).then((data) => {
      this.fundsData = data;
      this.fundsData.forEach(element => {
        
                 this.fundsTotal = element.totalFund
                   });     
      }, (err) => {
         console.log(err);
      
       }); 
  }

  getEmployees(){
    var info = {
      apartmentId: this.apartmentId
    }
  //Get all Desingnations
    this.adminService.getEmployees(info).then((data) => {
        this.employees = data;
        console.log(this.employees);
        }, (err) => {
      console.log(err);
    });
  }

  getDesignations(){
    var info = {
      apartmentId: this.apartmentId
    }
  //Get all Desingnations
    this.adminService.getDesignations(info).then((data) => {
        this.designations = data;
        console.log(this.designations);
        }, (err) => {
      console.log(err);
    });
  }

  getYears(){
  var info = {
    apartmentId: this.apartmentId
  }
  //Get all Desingnations
  this.adminService.getYears(info).then((data) => {
    this.years = data;
    console.log(this.years);
  }, (err) => {
  console.log(err);
  });
  } 
  getMonths(){
  var info = {
    apartmentId: this.apartmentId
  }
  //Get all Designations
  this.adminService.getMonths(info).then((data) => {
    this.months = data;
    console.log(this.months);
  }, (err) => {
  console.log(err);
  });
  }
  onFormSubmit(){
  
  let salary_details = {
    apartmentId:this.apartmentId,
    name:this.salaryForm.get('employee').value,
    designation:this.salaryForm.get('designation').value,
    month:this.salaryForm.get('month').value,
    year:this.salaryForm.get('year').value,
    amount:this.salaryForm.get('amount').value,
    date:this.salaryForm.get('date').value,
    };
    console.log(JSON.stringify(salary_details,null,4));
      //Before Adding Salary

      //Tell Admin The Remaining Amount 
      console.log('Total Fund '+ this.fundsTotal);
      console.log('Amount '+ salary_details.amount);
      
      this.balanceAmount = parseInt(this.fundsTotal) -  parseInt(salary_details.amount)
     // console.log('Balance is '+this.balanceAmount)
     var balance = "Remaing Balance  ".concat(this.balanceAmount) ;
      this.openSnackBar(balance);  
      //Then Add Salary

    this.adminService.addEmployeeSalary(salary_details).then((data) => {

      //Here Update Total Fund Table


      var totalFundDetails = {
           apartmentId: this.apartmentId,
           totalFund: this.balanceAmount
        }
        console.log(JSON.stringify(totalFundDetails,null,4));
     this.adminService.updateTotalFund(totalFundDetails).then((data) => {
          console.log('Fund Updated bro..');
              }, (err) => {
                console.log(err);
           }); 


    var message = "Salary Created";
    this.openSnackBar(message);  
          }, (err) => {
        console.log(err);
        var message = "Failed Creating";
        this.openSnackBar(message);
  });    
  }
  openSnackBar(message) {
  console.log('Message is '+message);
  this.snackBar.open(message, 'Close', { duration: 5000});
  }
}

