import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../../admin/service/admin.service';
import * as moment from 'moment';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  public token:any;
  public password:any;
  constructor(public dialog: MdDialog,fb: FormBuilder, public snackBar: MdSnackBar,
    public route:ActivatedRoute,public adminService : AdminService,
    public router:Router) {
      this.token = this.route.snapshot.params['token'];
      console.log('This is Token '+this.token);
     }

     onSubmit(){
        var info = {
          password:this.password,
         
        }
        console.log(JSON.stringify(info,null,4));
       this.adminService.ResetPasswordEmail(info,this.token).then((data) => {
        console.log('Passwod Updated')
           var message = 'Password Updated'
           this.openSnackBar(message);

           }, (err) => {
             console.log(err);
             var message = 'Failed Creating'
             this.openSnackBar(message)
           });  
     }
     openSnackBar(message) {
      this.snackBar.open(message, 'Close', { duration: 5000});
      //this._location.back();
  }

     

}
