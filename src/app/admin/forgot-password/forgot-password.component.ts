import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../admin/service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email:any;
  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
  }
  onSubmit(){
    var info ={
      email: this.email
    }
    this.adminService.SendForgotPasswordEmail(info).then((data) => {
      var message = "Mail Sent";
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
