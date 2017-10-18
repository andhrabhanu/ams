import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  public designations:any;
   public apartmentId:any;
   name = new FormControl('', [
    Validators.required,
   ]);
   email = new FormControl('', [
    Validators.required,
   ]);
   password = new FormControl('', [
    Validators.required,
   ]);
   mobile = new FormControl('', [
    Validators.required,
   ]);
   designation = new FormControl('', [
    Validators.required,
   ]);
   address = new FormControl('', [
    Validators.required,
   ]);
   joining_date = new FormControl('', [
    Validators.required,
   ]);
   ending_date = new FormControl('');

   employeeForm = new FormGroup({
    name:this.name,
    email: this.email,
    password:this.password,
    mobile:this.mobile,
    designation:this.designation,
    address:this.address,
    joining_date:this.joining_date,
    ending_date:this.ending_date
});

  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
      this.getDesignations();
  }

  getDesignations(){
      var info = {
        apartmentId: this.apartmentId
      }
    //Get all Desingnations
    this.adminService.getDesignations(info).then((data) => {
        this.designations = data;
        console.log(this.designations);
       }, (err) => {
      console.log(err);
    });
  }

  onFormSubmit(){
    //Get all Floors
    let employee_details = {
      apartmentId:this.apartmentId,
      name:this.employeeForm.get('name').value,
      email:this.employeeForm.get('email').value,
      password:this.employeeForm.get('password').value,
      mobile:this.employeeForm.get('mobile').value,
      address:this.employeeForm.get('address').value,
      designation:this.employeeForm.get('designation').value,
      joining_date:this.employeeForm.get('joining_date').value,
      ending_date:this.employeeForm.get('ending_date').value,
    };
    console.log(JSON.stringify(employee_details,null,4));
      this.adminService.addEmployee(employee_details).then((data) => {
      var message = "Employee Created";
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
