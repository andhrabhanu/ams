import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import * as moment from 'moment';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-view-monthly-fund',
  templateUrl: './view-monthly-fund.component.html',
  styleUrls: ['./view-monthly-fund.component.css']
})
export class ViewMonthlyFundComponent {
  public monthlyFundId:any;
  public monthlyFund:any;
  public month:any; public year:any;
  public paidUnits:any;
  submitted = false;
  
 

 
  constructor(public dialog: MdDialog,fb: FormBuilder, public snackBar: MdSnackBar,
    public route:ActivatedRoute,public adminService : AdminService,
    public router:Router) {
      this.getMonthlyFund();
     }
     uniqId = this.route.snapshot.params['uniqId'];
     getMonthlyFund(){
      console.log('Getting Monthly Fund of '+this.uniqId);
      this.adminService.getMonthlyFund(this.uniqId).then((data) => {
        this.monthlyFund = data;
        this.monthlyFundId =  this.monthlyFund._id;
        this.month =  this.monthlyFund.month.month;
        this.year =  this.monthlyFund.year.year;
        this.paidUnits = this.monthlyFund.units
        console.log(this.paidUnits);
       
  
      }, (err) => {
          console.log(err);
      }); 


     }



}
