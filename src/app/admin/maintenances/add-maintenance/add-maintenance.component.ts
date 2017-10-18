import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent {
  
  public years:any;
  public months:any;
  public apartmentId:any;
  public corpusfundTotal:any;
  public corpusfundData:any;
  public balanceAmount:any;
  date = new FormControl('', [
    Validators.required,
   ]);
  month = new FormControl('', [
   Validators.required,
  ]);
  year = new FormControl('', [
    Validators.required,
   ]);

  title = new FormControl('', [
   Validators.required,
  ]);
  amount = new FormControl('', [
   Validators.required,
  ]);
  details = new FormControl('', [
    Validators.required,
   ]);

  maintenanceForm = new FormGroup({
    title:this.title,
    date:this.date,
   month:this.month,
   year: this.year,
   amount:this.amount,
   details:this.details,
 });

 constructor(public adminService:AdminService,
   public route:ActivatedRoute,
   public router:Router,private _fb: FormBuilder,
   public snackBar: MdSnackBar) {
     var admin = localStorage.getItem('admin');
     var parsing  = JSON.parse(admin);
     this.apartmentId = parsing.apartmentId._id;
    
     this.getYears();
     this.getMonths();
     this.getCorpusFundsTotal();


 }

 getCorpusFundsTotal(){
  let apartmentDetails = {
  
    apartmentId: this.apartmentId
  };
  this.adminService.getCorpusFundsTotal(apartmentDetails).then((data) => {
    this.corpusfundData = data;
    this.corpusfundData.forEach(element => {
      
               this.corpusfundTotal = element.totalCorpusFund
                 });     
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
   
   let maintenance_details = {
     apartmentId:this.apartmentId,
     title:this.maintenanceForm.get('title').value,
     date:this.maintenanceForm.get('date').value,
     month:this.maintenanceForm.get('month').value,
     year:this.maintenanceForm.get('year').value,
     amount:this.maintenanceForm.get('amount').value,
     details:this.maintenanceForm.get('details').value,
    };
     console.log(JSON.stringify(maintenance_details,null,4));
    //Tell Admin The Remaining Amount 
   // console.log('Total Fund '+ this.corpusfundTotal);
    //console.log('Amount '+ maintenance_details.amount);
    this.balanceAmount = parseInt(this.corpusfundTotal) -  parseInt(maintenance_details.amount)
    console.log('Balance is '+this.balanceAmount)

      this.adminService.addMaintenance(maintenance_details).then((data) => {
        var totalCorpusFundDetails = {
          apartmentId: this.apartmentId,
          totalCorpusFund: this.balanceAmount
       }
       console.log(JSON.stringify(totalCorpusFundDetails,null,4));
       this.adminService.updateTotalCorpusFund(totalCorpusFundDetails).then((data) => {
            console.log('CorpusFund Updated bro..');
                }, (err) => {
                  console.log(err);
             }); 
        
    
    
        var message = "Maintenance Created";
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


