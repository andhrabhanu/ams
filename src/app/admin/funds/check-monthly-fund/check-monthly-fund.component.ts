
import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {MonthlyFund} from '../monthlyfund';
import {MdSnackBar} from '@angular/material';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-check-monthly-fund',
  templateUrl: './check-monthly-fund.component.html',
  styleUrls: ['./check-monthly-fund.component.css']
})
export class CheckMonthlyFundComponent implements OnInit {
 

  //emails = [{email:"email1"},{email:"email2"},{email:"email3"},{email:'email4'}]
  myForm: FormGroup;


  totalUnits:any;
  apartmentId: any;
  monthlyFund: any;
  units: any;
  model = new MonthlyFund('', '', '', '', '');
  public sizes:any;
  public years:any;
  public months:any;
  purpose = new FormControl('', [
    Validators.required,
   ]);
   month = new FormControl('', [
    Validators.required,
   ]);
   year = new FormControl('', [
     Validators.required,
    ]);
  ngOnInit() {
    this.myForm = this.fb.group({
      //useremail: this.fb.array([]),
      unit: this.fb.array([]),
      purpose: this.purpose,
      month: this.month,
      year: this.year
    });
  }
  constructor(private fb: FormBuilder,public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,
  
    public snackBar: MdSnackBar) {


 
    
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
      this.monthlyFund = parsing.apartmentId.monthlyFund;
      this.getUnits();
      this.getYears();
      this.getMonths();
     }
     
     /* onChange(email:string, isChecked: boolean) {
      const emailFormArray = <FormArray>this.myForm.controls.useremail;
  
      if(isChecked) {
        emailFormArray.push(new FormControl(email));
      } else {
        let index = emailFormArray.controls.findIndex(x => x.value == email)
        emailFormArray.removeAt(index);
      }
    } */
    onChange(unit:string, isChecked: boolean) {
      const unitFormArray = <FormArray>this.myForm.controls.unit;
  
      if(isChecked) {
        unitFormArray.push(new FormControl(unit));
      } else {
        let index = unitFormArray.controls.findIndex(x => x.value == unit)
        unitFormArray.removeAt(index);
      }
    }
  
  
     getUnits(){
      var aparinfo = {
        apartmentId: this.apartmentId
      }
      this.adminService.getAllUnits(aparinfo).then((data) => {
        this.units = data;
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
      //Get all Months
     this.adminService.getMonths(info).then((data) => {
        this.months = data;
        console.log(this.months);
      }, (err) => {
      console.log(err);
    });
    }
    
  onSubmit() { 
    console.log('Form Submmited');
    this.totalUnits =this.myForm.get('unit').value;
  //  this.totalUnits.length;

  //Multiply No of Units by monthly fund
  var totalAmount = this.totalUnits.length * this.monthlyFund;
    console.log('Total Amount '+totalAmount)
   var fundDetails = {
        apartmentId:this.apartmentId,
        month:this.myForm.get('month').value,
        year:this.myForm.get('year').value,
        date: moment().format('DD MMM YY, h:mm a'),
       //We are getting this from LocalStorage
        amount:totalAmount,
        purpose:this.myForm.get('purpose').value,
        units:this.myForm.get('unit').value,
      }
      console.log(JSON.stringify(fundDetails,null,4));
       //Here Add Code to Update that Unit Status
       this.adminService.addMonthlyFund(fundDetails).then((data) => {
        var message = "Monthly Fund Added";
         //Here Update it ...
        var Tinfo = {
          apartmentId: this.apartmentId
        }
    this.adminService.createTotalFund(Tinfo).then((data) => {
        console.log('Added To Total Fund ');
           }, (err) => {
          console.log(err);
         
    }); 
         this.openSnackBar(message);   
        }, (err) => {
           console.log(err);
   
         });   
  }
  openSnackBar(message) {
    console.log('Message is '+message);
    this.snackBar.open(message, 'Close', { duration: 5000});
}


}
