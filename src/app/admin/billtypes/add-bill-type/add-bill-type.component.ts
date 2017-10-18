import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-bill-type',
  templateUrl: './add-bill-type.component.html',
  styleUrls: ['./add-bill-type.component.css']
})
export class AddBillTypeComponent{
  public apartmentId:any;
  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
    }

    billType = new FormControl('', [
      Validators.required,
      ]); 
      billTypeForm = new FormGroup({
        billType: this.billType,
      }) 
      onFormSubmit(): void {
        
        let billType_details = {
          billType: this.billTypeForm.get('billType').value,
          apartmentId: this.apartmentId
        };
        console.log(JSON.stringify(billType_details,null,4));

         this.adminService.addBillType(billType_details).then((data) => {
          var message = "BillType Created";
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
