import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent{
  public owners:any;
  public years:any;
  public months:any;
  public apartmentId:any;
  owner = new FormControl('', [
   Validators.required,
  ]);
  month = new FormControl('', [
   Validators.required,
  ]);
  year = new FormControl('', [
    Validators.required,
   ]);
  date = new FormControl('', [
   Validators.required,
  ]);
  amount = new FormControl('', [
   Validators.required,
  ]);
  purpose = new FormControl('', [
   Validators.required,
  ]);

  fundForm = new FormGroup({
   owner:this.owner,
   month:this.month,
   year: this.year,
   date:this.date,
   amount:this.amount,
   purpose:this.purpose,
 });

 constructor(public adminService:AdminService,
   public route:ActivatedRoute,
   public router:Router,private _fb: FormBuilder,
   public snackBar: MdSnackBar) {
     var admin = localStorage.getItem('admin');
     var parsing  = JSON.parse(admin);
     this.apartmentId = parsing.apartmentId._id;
     this.getOwners();
     this.getYears();
     this.getMonths();

 }

 getOwners(){
     var info = {
       apartmentId: this.apartmentId
     }
   //Get all Desingnations
   this.adminService.getOwners(info).then((data) => {
       this.owners = data;
       console.log(this.owners);
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
 onFormSubmit(){
   
   let fund_details = {
     apartmentId:this.apartmentId,
     ownerId:this.fundForm.get('owner').value,
     month:this.fundForm.get('month').value,
     year:this.fundForm.get('year').value,
     date:this.fundForm.get('date').value,
     amount:this.fundForm.get('amount').value,
     purpose:this.fundForm.get('purpose').value,
    };
     console.log(JSON.stringify(fund_details,null,4));
      this.adminService.addFund(fund_details).then((data) => {
     var message = "Fund Created";

    //Here Update it ...
    var Tinfo = {
      apartmentId: this.apartmentId
    }
    this.adminService.createTotalFund(Tinfo).then((data) => {

           }, (err) => {
          console.log(err);
         
    });  

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


