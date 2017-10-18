import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { ApartmentService } from '../../apartment/apartment.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent{

  constructor(public apartmentService:ApartmentService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) { }
    code = new FormControl('', [
      Validators.required,
      ]);
    name = new FormControl('', [
        Validators.required,
      ]);
    address = new FormControl('', [
          Validators.required,
      ]);       
      apartmentForm = new FormGroup({
        code:this.code,
	      name:this.name,
	      address:this.address
      })  

      onFormSubmit(){

        console.log('Submiteed form');
        let apartment_details = {
          code: this.apartmentForm.get('code').value,
          name: this.apartmentForm.get('name').value,
          address: this.apartmentForm.get('address').value,
        };
        console.log(JSON.stringify(apartment_details,null,4));
     
        
          
    
           this.apartmentService.addApartment(apartment_details).then((data) => {
                        
                           var message = "Apartment Created";
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
