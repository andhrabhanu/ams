import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormControl, Validators, FormGroup,FormBuilder,NG_VALIDATORS,Validator,AbstractControl,ValidatorFn,} from '@angular/forms';
import { RequestService } from '../service/request.service';
import { AssignRequest } from '../assignrequest';
//import { Request } from '../request';
import {MdSnackBar} from '@angular/material';
import * as moment from 'moment';
import { ManagerService } from '../../service/manager.service';



@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  model = new AssignRequest('','');
  public managerID:any; 
  submitted = false;



  properties: any;
  tenants: any;

 serviceCategories:any;
 serviceResources:any; 
  

  
  public selectedTenants : any; 
  public selectedServiceResources : any; 

    //NgModels
    public tenant:any;
    public property: any;
    public objsize:any;

    public serviceCategory: any;
    public serviceResource: any;
    public objsize1:any;





  public request:any; public request_id:any; public requestTitle:any; 
  public requestText:any; public propertyName:any; public requestPriority:any; 
  public requestStatus:any; public requestDate:any; 
  
  frequestTitle = new FormControl('', [
      Validators.required,
    ]); 
  frequestPriority = new FormControl('', [
      Validators.required
      ]);  
  
  frequestStatus = new FormControl('', [
      Validators.required,
    ]);
  frequestText = new FormControl('', [
      Validators.required,
    ]); 
    
    requestForm = new FormGroup({
      frequestTitle: this.frequestTitle,
      frequestPriority: this.frequestPriority,
      frequestStatus: this.frequestStatus,
      frequestText: this.frequestText,
    
    }); 
    
  
  
  constructor(public route:ActivatedRoute,public requestService : RequestService,public router:Router, public managerService: ManagerService,
   private _fb: FormBuilder, public snackBar: MdSnackBar) {
      var manager = localStorage.getItem('manager');
      console.log('Manager UserType')
      var parsing_manager  = JSON.parse(manager);
      this.managerID = parsing_manager._id;
      console.log('Manager Id '+ this.managerID) 
      this.getServiceCategories();
      this.getServiceResources(); 
     /*  this.getProperties();
      this.getTenants(); */
     }
    uniqId = this.route.snapshot.params['uniqId'];
   ngOnInit() {
    this.getRequest();
  }
  getProperties(){
    //Get all Properties

    var info = {
      managerId: this.managerID
    }
    this.requestService.getProperties(info).then((data) => {
            this.properties = data;
            console.log(this.properties);
           
      // console.log(JSON.stringify(this.properties,null,4));

        }, (err) => {
          console.log(err);
    });
        
}
getTenants(){
  
    this.requestService.getTenants().then((data) => {
    this.tenants = data;
    console.log(this.tenants);

    }, (err) => {
     console.log(err);
    });

}
onSubmit() { 
/*   this.submitted = true;
  var tenantId = this.model.tenant;
  console.log(tenantId)
  if(tenantId=='0'){
      console.log('UnLeased Property');
      let  requestDetails = {
        propertyId:this.model.property,
        managerId:this.managerID,
        requestTitle:this.model.requestTitle,
        requestText:this.model.description,
        requestPriority:this.model.priority,
        requestDate:moment().format('DD MMM YY, h:mm a'),
      }
    console.log(JSON.stringify(requestDetails,null,4));
      
    this.AddRequest(requestDetails);
  }
  else{
    console.log('Leased Property');
    let requestDetails1 = {
      propertyId:this.model.property,
      managerId:this.managerID,
      tenantId:this.model.tenant,
      requestTitle:this.model.requestTitle,
      requestText:this.model.description,
      requestPriority:this.model.priority,
      requestDate:moment().format('DD MMM YY, h:mm a'),
    }
    console.log(JSON.stringify(requestDetails1,null,4))
    this.AddRequest(requestDetails1);
  }

   */

  
//console.log(JSON.stringify(requestDetails,null,4))
  }
onSelect(propertyId) {

  console.log('Prop ID '+propertyId);
  
    this.selectedTenants = this.tenants.filter(tenant => tenant.propertyId == propertyId)
   this.objsize = Object.keys(this.selectedTenants).length;
   console.log('Selected Tenant '+this.selectedTenants);
   console.log('Size is '+ this.objsize)
   
   
 }

 onSelectforResource(serviceCatId) {
  
    console.log('Cat ID '+serviceCatId);
    
      this.selectedServiceResources = this.serviceResources.filter(serviceResource => serviceResource.serviceCatId._id == serviceCatId)
     this.objsize1 = Object.keys(this.selectedServiceResources).length;
     //console.log('Selected Tenant '+this.selectedTenants);
     console.log('Size is '+ this.objsize1)
     
     
   }



  getRequest(){
      this.requestService.getRequestByUniqueId(this.uniqId).then((data) => {
      this.request = data;
      this.request_id = this.request._id;
      this.propertyName = this.request.propertyId.name;
      this.requestTitle = this.request.requestTitle;
      this.requestText = this.request.requestText;
      this.requestPriority = this.request.requestPriority;
      this.requestDate = this.request.requestDate;
      this.requestStatus = this.request.requestStatus;

      this.requestForm.controls['frequestTitle'].setValue(this.requestTitle);
      this.requestForm.controls['frequestPriority'].setValue(this.requestPriority);
      this.requestForm.controls['frequestStatus'].setValue(this.requestStatus);
      this.requestForm.controls['frequestText'].setValue(this.requestText);
      console.log('Request STatus '+this.requestStatus);
      }, (err) => {
        console.log(err);
    });
  }

  getServiceCategories(){
    this.managerService.getServiceCategories().then((data) => {
    this.serviceCategories = data;
    console.log(this.serviceCategories);

    }, (err) => {
     console.log(err);
    });
 }
 getServiceResources(){
    var info = {
      managerId:this.managerID
    }
    this.managerService.getServiceResources(info).then((data) => {
    this.serviceResources = data;
    console.log(this.serviceResources);

    }, (err) => {
     console.log(err);
    });

}

onAssigRequest(){
  console.log('Request Assigned');

}





  UpdateRequest(){
        
    let requestDetails = {
        id: this.request_id,
        requestTitle: this.requestForm.get('frequestTitle').value,
        requestText: this.requestForm.get('frequestText').value,
        requestPriority: this.requestForm.get('frequestPriority').value,
        requestStatus:this.requestForm.get('frequestStatus').value 
     };
      console.log(JSON.stringify(requestDetails,null,4));

    //Getting Form Data
    this.requestService.updateRequest(requestDetails).then((data) => {
         console.log('Updated Request of '+ requestDetails.id);
      }, (err) => {
        console.log(err);
    }); 
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
}
}
