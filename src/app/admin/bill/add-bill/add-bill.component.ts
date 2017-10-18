import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent{
  public billTypes:any;
  public years:any;
  public fundsTotal:any;
  public fundsData:any;
  public months:any;
  public apartmentId:any;
  billDate = new FormControl('', [
   Validators.required,
  ]);
  billMonth = new FormControl('', [
   Validators.required,
  ]);
  billType = new FormControl('', [
    Validators.required,
   ]);
  billYear = new FormControl('', [
   Validators.required,
  ]);
  billAmount = new FormControl('', [
   Validators.required,
  ]);
  bank = new FormControl('', [
   Validators.required,
  ]);
  billDetails = new FormControl('', [
   Validators.required,
  ]);
  billForm = new FormGroup({
   billDate:this.billDate,
   billType:this.billType,
   billMonth: this.billMonth,
   billYear:this.billYear,
   billAmount:this.billAmount,
   bank:this.bank,
   billDetails:this.billDetails
  });

 constructor(public adminService:AdminService,
   public route:ActivatedRoute,
   public router:Router,private _fb: FormBuilder,
   public snackBar: MdSnackBar) {
     var admin = localStorage.getItem('admin');
     var parsing  = JSON.parse(admin);
     this.apartmentId = parsing.apartmentId._id;
     this.getBillTypes();
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
    this.fundsTotal = this.fundsData.totalFund 
   
    }, (err) => {
       console.log(err);
    
     }); 
}

 getBillTypes(){
     var info = {
       apartmentId: this.apartmentId
     }
   //Get all Desingnations
   this.adminService.getBillTypes(info).then((data) => {
       this.billTypes = data;
       console.log(this.billTypes);
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
   
   let bill_details = {
     apartmentId:this.apartmentId,
     billType:this.billForm.get('billType').value,
     billDate:this.billForm.get('billDate').value,
     billMonth:this.billForm.get('billMonth').value,
     billYear:this.billForm.get('billYear').value,
     billAmount:this.billForm.get('billAmount').value,
     bank:this.billForm.get('bank').value,
     billDetails:this.billForm.get('billDetails').value,
    };
     console.log(JSON.stringify(bill_details,null,4));

      //Before Adding Bill

      //Tell Admin The Remaining Amount 
      console.log('Total Fund '+ this.fundsTotal);
      console.log('Amount '+ this.billAmount)
      
      

      //Then Add Bill
 /*    this.adminService.addBill(bill_details).then((data) => {
     var message = "Bill Created";
     this.openSnackBar(message);  

     //If Bill Addition is Success then Update Total Funds Table .
          }, (err) => {
         console.log(err);
         var message = "Failed Creating";
         this.openSnackBar(message);
   });  */  
 }
 openSnackBar(message) {
   console.log('Message is '+message);
   this.snackBar.open(message, 'Close', { duration: 5000});
 }




}

