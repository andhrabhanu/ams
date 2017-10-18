import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {
  public owners:any;
  public units:any;
  public apartmentId:any;
  owner = new FormControl('', [
    Validators.required,
   ]);
   unit = new FormControl('', [
    Validators.required,
   ]);
   title = new FormControl('', [
     Validators.required,
    ]);
   date = new FormControl('', [
    Validators.required,
   ]);
   description = new FormControl('', [
    Validators.required,
   ]);

 

  complaintForm = new FormGroup({
    owner:this.owner,
    unit:this.unit,
    title: this.title,
    date:this.date,
    description:this.description,

  });
  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) { 
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
      this.getOwners();
      this.getUnits();
    
    }
    getOwners(){
      var info = {
        apartmentId: this.apartmentId
      }
    this.adminService.getOwners(info).then((data) => {
        this.owners = data;
        console.log(this.owners);
       }, (err) => {
      console.log(err);
    });
  }
  getUnits(){
    var info = {
      apartmentId: this.apartmentId
    }
  this.adminService.getAllUnits(info).then((data) => {
      this.units = data;
     }, (err) => {
    console.log(err);
  });
}
  


 onFormSubmit(){
  
  let complaint_details = {
    apartmentId:this.apartmentId,
    ownerId:this.complaintForm.get('owner').value,
    unitId:this.complaintForm.get('unit').value,
    title:this.complaintForm.get('title').value,
    date:this.complaintForm.get('date').value,
    description:this.complaintForm.get('description').value,

    
  };
     console.log(JSON.stringify(complaint_details,null,4));
     this.adminService.addComplaint(complaint_details).then((data) => {
      var message = "Complaint Created";
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

