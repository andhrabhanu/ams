import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-month',
  templateUrl: './add-month.component.html',
  styleUrls: ['./add-month.component.css']
})
export class AddMonthComponent {
  public apartmentId:any;
  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
    }

    month = new FormControl('', [
      Validators.required,
      ]); 
      monthForm = new FormGroup({
        month: this.month,
      }) 
      onFormSubmit(): void {
        
        let month_details = {
          month: this.monthForm.get('month').value,
          apartmentId: this.apartmentId
        };
        console.log(JSON.stringify(month_details,null,4));

         this.adminService.addMonth(month_details).then((data) => {
          var message = "Month Created";
           this.openSnackBar(message);   
          }, (err) => {
             console.log(err);
            // var message = 'Failed Creating'
            // this.openSnackBar(message)
           });   
        

      }
      openSnackBar(message) {
        console.log('Message is '+message);
        this.snackBar.open(message, 'Close', { duration: 5000});
      }

  

}
