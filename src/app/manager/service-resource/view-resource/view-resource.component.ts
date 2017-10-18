import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ManagerService } from '../../service/manager.service';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';

import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-view-resource',
  templateUrl: './view-resource.component.html',
  styleUrls: ['./view-resource.component.css']
})
export class ViewResourceComponent implements OnInit {
  resource:any; public rname:any; public rmobile:any; public category:any;
  name = new FormControl('', [Validators.required,]);
  mobile = new FormControl('', [Validators.required,]);
  resourceForm = new FormGroup({
    name: this.name,
    mobile: this.mobile
  });
  
  constructor(fb: FormBuilder,public route:ActivatedRoute,
    public router:Router,public managerService: ManagerService) { }

  ngOnInit() {
    this.getResource();
  }
  uniqId = this.route.snapshot.params['uniqId'];
  
  getResource(){
    console.log('Unqiue Id is '+this.uniqId);
     this.managerService.getServiceResourceByUniqId(this.uniqId).then((data) => {
      this.resource = data;
      this.rname = this.resource.name
      this.category = this.resource.serviceCatId.name      
      console.log('Name ' + this.name);
      console.log('Category ' + this.category);
      this.rmobile = this.resource.mobile
      console.log(this.resource)


       this.resourceForm.controls['name'].setValue(this.resource.name);
      this.resourceForm.controls['mobile'].setValue(this.resource.mobile); 

    }, (err) => {
        console.log(err);
    }); 
  }

  UpdateResouceinfo(){
    console.log('Updating Resource');
  }

}
