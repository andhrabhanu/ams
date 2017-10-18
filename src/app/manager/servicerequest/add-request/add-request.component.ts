
import { Component,OnInit,Directive, forwardRef, 
  Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { RequestService } from '../service/request.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import { Request } from '../request';
import * as moment from 'moment';


@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  model = new Request('','','','','');
  submitted = false;
  public managerID:any; 
    
  
  
  properties: any;
  tenants: any;

  public selectedSubCats: any[];
  public leaseID:any;


  public selectedTenants : any; 
  public objsize:any;
  public finalLeaseId:any;
  public mytenantID: any
  
  //NgModels
  public tenant:any;
  public property: any;

  
  
    
          
      
         
  constructor(public requestService: RequestService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
    
      //Getting User Type      
      var manager = localStorage.getItem('manager');
      console.log('Manager UserType')
      var parsing_manager  = JSON.parse(manager);
      this.managerID = parsing_manager._id;
      console.log('Manager Id'+ this.managerID)   
     this.getProperties();
     this.getTenants();
      
     }

  ngOnInit() {
    //this.getProperties();
   
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
    this.submitted = true;
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
 
    

    
  //console.log(JSON.stringify(requestDetails,null,4))
  }

  AddRequest(myRequestDetails){
    this.requestService.addRequest(myRequestDetails).then((data) => {
      
         console.log('Success Added Request')
         var message = 'Request Created'
         this.openSnackBar(message);
         this.router.navigate(['/manager/requests/open/'])

         }, (err) => {
           console.log(err);
           var message = 'Failed Creating'
           this.openSnackBar(message)
         }); 
  }
  
  onSelect(propertyId) {
   
     this.selectedTenants = this.tenants.filter(tenant => tenant.propertyId == propertyId)
    this.objsize = Object.keys(this.selectedTenants).length;
    console.log('Size is '+ this.objsize)
    
    
  }
 

  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
}

}
