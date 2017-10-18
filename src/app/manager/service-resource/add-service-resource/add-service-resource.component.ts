import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { ManagerService } from '../../service/manager.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-service-resource',
  templateUrl: './add-service-resource.component.html',
  styleUrls: ['./add-service-resource.component.css']
})
export class AddServiceResourceComponent  {
  public managerID:any; public serviceCategories:any;
      name = new FormControl('', [
        Validators.required,
      ]);
    
      mobile = new FormControl('', [
        Validators.required,
      ]);
      serviceCatId = new FormControl('', [
        Validators.required,
        ]);
      skill = new FormControl('');
      
      resourceForm = new FormGroup({
        name: this.name,
        mobile: this.mobile,
        serviceCatId: this.serviceCatId,
        skill: this.skill
      })

  constructor(public managerService:ManagerService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
       //Getting User Type      
       var manager = localStorage.getItem('manager');
       console.log('Manager UserType')
       var parsing_manager  = JSON.parse(manager);
       this.managerID = parsing_manager._id;
       console.log('Manager Id'+ this.managerID)

       this.getServiceCategories();
     }
     getServiceCategories(){
        this.managerService.getServiceCategories().then((data) => {
        this.serviceCategories = data;
        console.log(this.serviceCategories);
  
        }, (err) => {
         console.log(err);
        });
     }
     onFormSubmit(){
       

       let resource_details = {
        name:this.resourceForm.get('name').value,
        managerId: this.managerID,
        mobile: this.resourceForm.get('mobile').value,
        serviceCatId: this.resourceForm.get('serviceCatId').value,
        skill: this.resourceForm.get('skill').value,
      };
      console.log(JSON.stringify(resource_details,null,4));
       

        this.managerService.addServiceResource(resource_details).then((data) => {
                    
                       console.log('Success Created Resource')
                       var message = 'Resource Created'
                       this.openSnackBar(message)
                }, (err) => {
                         console.log(err);
                         var message = 'Failed Creating'
                         this.openSnackBar(message)
                       }); 
    }
    openSnackBar(message) {
      this.snackBar.open(message, 'Close', { duration: 5000});
  }
  }
