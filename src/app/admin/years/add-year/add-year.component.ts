import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-year',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.css']
})
export class AddYearComponent {
  public apartmentId:any;
  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
     }
     year = new FormControl('', [
      Validators.required,
      ]); 
      yearForm = new FormGroup({
        year: this.year,
      }) 

      onFormSubmit(): void {
        
        let year_details = {
          year: this.yearForm.get('year').value,
          apartmentId: this.apartmentId
        };
        console.log(JSON.stringify(year_details,null,4));

         this.adminService.addYear(year_details).then((data) => {
          var message = "Year Created";
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
