import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { TenantService } from '../service/tenant.service';
import { PropertyService } from '../../property/service/property.service';
import * as moment from 'moment';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-view-tenant',
  templateUrl: './view-tenant.component.html',
  styleUrls: ['./view-tenant.component.css']
})
export class ViewTenantComponent implements OnInit {
  public tenants:any;public msg:any; public main_email:any; public Tenant_from:any;
  passwordForm : FormGroup; public main_firstName:any;public main_lastName:any;
  public main_primaryphone:any; public propertyName:any; public propertyId:any;
  public propertyUniqueId:any; public leaseData:any; public leaseTerm: any;
  public leaseStart: any; public leaseEnd:any; public is_Leased:any;
  /* public email:any;
  public firstName:any; public lastName:any; public primary_phone;
  public alt_phone; */

    email = new FormControl('', [Validators.required,]);
    
    new_email = new FormControl('', );
    firstName = new FormControl('', [Validators.required,]);
    lastName = new FormControl('', [Validators.required,]);
    primary_phone = new FormControl('', [Validators.required,]);
    alt_phone = new FormControl('', [Validators.required,]);
    notes = new FormControl('',[Validators.required,] );
    
    /* password = new FormControl('', [Validators.required,]);
    confirm_password = new FormControl('',); */


    
     //Database Values  
        tenantAccountForm = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName,
          primary_phone: this.primary_phone,
          alt_phone: this.alt_phone
          });
        
        tenantEmailForm = new FormGroup({
          email: this.email,
          new_email: this.new_email,
        });
        addNotesForm = new FormGroup({
          notes: this.notes,
         
        });
        
        
       

  constructor(public dialog: MdDialog,fb: FormBuilder,public route:ActivatedRoute,public tenantService : TenantService,
    public router:Router,public propertyService: PropertyService) {
      this.passwordForm = fb.group({
       
        'password': [null, Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(10)])],
        'confirmPassword': ['', Validators.required],
      },{validator: this.matchingPasswords('password', 'confirmPassword')}) 
    }

  ngOnInit() {
    this.getTenant();
   
  }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
          
        };
      }
  
    }
  }
  getLease(propID){
        var pobj = {
          propertyId:propID
      }
       
     this.propertyService.getPropLease(pobj).then((data)=>{
   
      this.leaseData = data;

      console.log(this.leaseData)
     
      this.leaseTerm = this.leaseData.leaseTerm;
      this.leaseStart = this.leaseData.leaseStart;
      
      this.leaseEnd = this.leaseData.leaseEnd;
    
      //console.log('HERE  '+JSON.stringify(this.leaseData,null,4));
  },(err)=>{
      console.log(err)
  }) 
  }
  UpdateAccountInfo(): void {
    console.log('Updating Account Info');
  }
  UpdatePassword(){
    if(this.passwordForm.controls.confirmPassword.touched && this.passwordForm.hasError('mismatchedPasswords')){
      this.msg = 'Passwords dont match please try again'
     console.log('Password Dont Match')
     this.openDialog();
      }
    console.log('Updating Password..');
  }
  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
     // this.selectedOption = result;
    });
  }
  UpdateEmailInfo() {
    console.log('Updating Email Info');
  }
  AddNotesTenant(){
    console.log('Adding Tenant Notes');
  }
  
  uniqid = this.route.snapshot.params['uniqId'];
  
  getTenant(){
    console.log('Unqiue Id is'+this.uniqid);
     this.tenantService.getTenant(this.uniqid).then((data) => {
      this.tenants = data;
      console.log(this.tenants)
      this.main_email = this.tenants.email;
      this.main_firstName = this.tenants.firstName;
      this.main_lastName = this.tenants.lastName;
      this.main_primaryphone = this.tenants.primary_phone;
      this.Tenant_from = this.tenants.createdAt;

      this.is_Leased = this.tenants.isLeased;

      if(this.is_Leased =="0"){
         // console.log('Tenant is Free');
      }
      else{
       // console.log('Tenant is in Lease');
        this.propertyName = this.tenants.propertyId.name;
        this.propertyUniqueId = this.tenants.propertyId.uniqId;
        console.log('Property Name '+this.propertyName);
        console.log('Property UNIQUEID '+this.propertyUniqueId);
     /*    this.propertyId = this.tenants.propertyId._id;
        this.getLease(this.propertyId); 
        
        this.propertyUniqueId = this.tenants.propertyId.uniqId;
        console.log('Unqiue IDDDD'+this.propertyUniqueId); */
      }
       
      console.log(this.tenants);
      //Write if Loop if Tenant has Leased or any



   /*    this.propertyName = this.tenants.propertyId.name;
      this.propertyId = this.tenants.propertyId._id;
      this.getLease(this.propertyId); 

      this.propertyUniqueId = this.tenants.propertyId.uniqid;*/

      this.tenantEmailForm.controls['email'].setValue(this.tenants.email);
      this.tenantAccountForm.controls['firstName'].setValue(this.tenants.firstName);
      this.tenantAccountForm.controls['lastName'].setValue(this.tenants.lastName);
      this.tenantAccountForm.controls['primary_phone'].setValue(this.tenants.primary_phone);
      this.tenantAccountForm.controls['alt_phone'].setValue(this.tenants.primary_phone);

    }, (err) => {
        console.log(err);
    }); 
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: 'dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
