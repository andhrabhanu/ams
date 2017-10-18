import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {SuperAdminService} from '../../service/super-admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent{
  public apartments:any; public myApartmentId:any; public adminId:any;
  public response :any; public status: any; public msgResponse:any
  constructor(public SuperadminService:SuperAdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
      this.getUnAssignedApartments();
     }
    name = new FormControl('', [
      Validators.required,
      ]); 
    email = new FormControl('', [
        Validators.required,
      ]); 
    monthlyFund = new FormControl('', [
        Validators.required,
      ]); 
    password = new FormControl('', [
        Validators.required,
      ]);
    apartment = new FormControl('', [
        Validators.required,
      ]);    
      adminForm = new FormGroup({
        name: this.name,
        email: this.email,
        password: this.password,
        apartment: this.apartment,
        monthlyFund:this.monthlyFund
      })  
      


  onFormSubmit(): void {
    this.myApartmentId = this.adminForm.get('apartment').value;
    
    let admin_details = {
      name: this.adminForm.get('name').value,
      email: this.adminForm.get('email').value,
      password: this.adminForm.get('password').value,
      apartmentId: this.adminForm.get('apartment').value,
     
    };

    console.log(JSON.stringify(admin_details,null,4));
      

        this.SuperadminService.addAdmin(admin_details).then((data) => {
                       this.response = data;
                       console.log(this.response)
                       this.status  = this.response.Status
                       if(this.status=="Success"){
                     
                      this.adminId = this.response.Admin._id;
                    // this.myApartmentId = this.respoanse.apartmentId;

                      var apart_info = {
                        id: this.myApartmentId,
                        adminId: this.myApartmentId,
                        monthlyFund: this.adminForm.get('monthlyFund').value,
                      };
                      console.log('Assigned by for Apartment '+JSON.stringify(apart_info,null,4));
                      this.SuperadminService.assignApartment(apart_info).then((data)=>{
                        console.log('Successfully Assigned');
                      },(err) => {
                        console.log(err);
                        console.log('Successfully Assigned');
                     
                      });
                      


                      var message = 'Admin Created' ;
                      this.openSnackBar(message);   
                      }
                      if(this.status=="Failed"){
                        this.msgResponse = this.response.Message 
                        this.openSnackBar(this.msgResponse);
                     }
                        //this.openSnackBar(message)

                        }, (err) => {
                          console.log(err);
                          var message = 'Failed Creating'
                        this.openSnackBar(message)
                        });
} 
getUnAssignedApartments(){
  //Get array here
    this.SuperadminService.getUnassignedApartments().then((data) => {
      this.apartments = data;
      console.log(this.apartments);
    }, (err) => {
    console.log("not allowed "+err);
  });
}
goBack(){
console.log('Added Property');
}
openSnackBar(message) {
  this.snackBar.open(message, 'Close', { duration: 5000});
}

}
