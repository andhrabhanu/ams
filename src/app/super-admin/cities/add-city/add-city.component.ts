import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { SuperAdminService } from '../../service/super-admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent {

  constructor(public superAdminService:SuperAdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) { }

    city = new FormControl('', [
      Validators.required,
    ]);

    cityForm = new FormGroup({
      city:this.city,
    }) 
    
    onFormSubmit(){
      
              console.log('Submitted form');
              let city_details = {
                city: this.cityForm.get('city').value,
                
              };
              console.log(JSON.stringify(city_details,null,4));
           
              
                
          
                 this.superAdminService.addCity(city_details).then((data) => {
                              var message = "City Created";
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
