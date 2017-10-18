import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PropertyService } from '../service/property.service';
import { CurrencyPipe } from '@angular/common';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-view-lease',
  templateUrl: './view-lease.component.html',
  styleUrls: ['./view-lease.component.css']
})
export class ViewLeaseComponent implements OnInit {
  tenantId:any; leaseId:any;
  propertyId:any ; leaseData:any; propertyName:any; tenantfirstName:any; tenantlastName:any;
  isClosed:any; leaseStatus:any; leaseUpdatedat:any; tenantUniqId:any;
  
  
    termsofLease = new FormControl('', [
        Validators.required
        ]);
    leaseStartDate = new FormControl('', [
        Validators.required
        ]);
    leaseEndDate = new FormControl('', [
        Validators.required
        ]);
    leaseNotes = new FormControl('', [
        Validators.required
        ]);


        tenantForm = new FormGroup({
          
          termsofLease: this.termsofLease,
          leaseStartDate: this.leaseStartDate,
          leaseEndDate:this.leaseEndDate,
          leaseNotes:this.leaseNotes
      });     

  constructor(public route:ActivatedRoute,public propertyService : PropertyService,
    public router:Router,public snackBar: MdSnackBar) {
      this.propertyId = this.route.snapshot.params['propId'];
      this.getPropLease();

     }

  ngOnInit() {
   
  }
  getPropLease(){
    console.log('Get Prop Lease of '+this.propertyId);

    var info = {
        propertyId: this.propertyId
    }
    this.propertyService.getPropLease(info).then((data) => {
      this.leaseData = data;
      this.propertyName = this.leaseData.propertyId.name;
      this.tenantfirstName = this.leaseData.tenantId.firstName;
      this.tenantlastName = this.leaseData.tenantId.lastName;
      
      this.leaseId = this.leaseData._id;
      this.tenantId = this.leaseData.tenantId._id


      this.isClosed = this.leaseData.closed;
      this.leaseUpdatedat = this.leaseData.updatedAt;
      this.tenantUniqId = this.leaseData.tenantId.uniqId;

      if(this.isClosed == '0'){
          this.leaseStatus='Active'
      }

      console.log(this.propertyName)
      this.tenantForm.controls['termsofLease'].setValue(this.leaseData.leaseTerm);
      this.tenantForm.controls['leaseStartDate'].setValue(this.leaseData.leaseStart);
      this.tenantForm.controls['leaseEndDate'].setValue(this.leaseData.leaseEnd);
      this.tenantForm.controls['leaseNotes'].setValue(this.leaseData.notes);
      

       
      }, 
      (err) => {
      console.log(err);
      var message = 'Failed Creating'
      this.openSnackBar(message)
       }); 

  }

  CloseLease(){
    console.log('Lease Closed');
     //Update Lease Table column - closed to 1
    //Update Property Table column - isLeased to 0
     //Update Lease Table column - isLeased to 0

    
     var info = {
       leaseId:this.leaseId,
       propertyId:this.propertyId,
       tenantId:this.tenantId
     }
     console.log(JSON.stringify(info,null,4))
       this.propertyService.closeLease(info).then((data) => {
   this.router.navigate(['/manager/properties/unleased']);

         var message = 'Lease Closed'
         this.openSnackBar(message)
       }, 
       (err) => {
       console.log(err);
       
        });  

  }

  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
  }
  UpdateLease(){
   

  }

}
