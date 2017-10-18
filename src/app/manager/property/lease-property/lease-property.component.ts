import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PropertyService } from '../service/property.service';
import { CurrencyPipe } from '@angular/common';
import {MdSnackBar} from '@angular/material';

 
@Component({
  selector: 'app-lease-property',
  templateUrl: './lease-property.component.html',
  styleUrls: ['./lease-property.component.css']
})
export class LeasePropertyComponent implements OnInit {
    property:any;public managerID:any;
    myLease:any;
    myLeaseId:any;
    unLeasedTenants;

    //Variables to retrieve from DB
    propertyId:any;propertyName:any; rent:any; uniqId:any; bedrooms:any; bathrooms:any; propertyImages:any;
    size:any; heating:any; yearBuilt:any; petsAllowed:any;
    parking:any; deposit:any; latepenalty:any; address:any;
    desc:any; type:any; style:any; prop_id:any; featured_img:any;
    
    //Fields from Form
      tenants = new FormControl('', [
                    Validators.required
                    ]);
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
    //must match           
      tenantForm = new FormGroup({
          tenant: this.tenants,
          termsofLease: this.termsofLease,
          leaseStartDate: this.leaseStartDate,
          leaseEndDate:this.leaseEndDate,
          leaseNotes:this.leaseNotes
      });
                
    constructor(public route:ActivatedRoute,public propertyService : PropertyService,
     public router:Router,public snackBar: MdSnackBar) {
      var manager = localStorage.getItem('manager');
      console.log('Manager UserType')
      var parsing_manager  = JSON.parse(manager);
      this.managerID = parsing_manager._id;
      console.log('Manager Id'+ this.managerID);
      }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['propId'];
    this.getProperty(this.propertyId);
    this.getUnLeasedTenants();
    //Write Service 
  }
  onFormSubmit(){
    let lease_details = {
        propertyId: this.propertyId,
        managerId: this.managerID,
        tenantId: this.tenantForm.get('tenant').value,
        leaseTerm: this.tenantForm.get('termsofLease').value,
        leaseStart: this.tenantForm.get('leaseStartDate').value,
        leaseEnd: this.tenantForm.get('leaseEndDate').value,
        notes: this.tenantForm.get('leaseNotes').value,
    };
      console.log(JSON.stringify(lease_details,null,4))
      this.propertyService.addLease(lease_details).then((data) => {
               this.myLease = data;
               this.myLeaseId = this.myLease._id;
               //Update Tenant Status
               this.updateTenantStatus();
               var message = 'Lease Created'
               this.openSnackBar(message)
               }, (err) => {
               console.log(err);
               var message = 'Failed Creating'
               this.openSnackBar(message)
                });
    }
  
  updateTenantStatus(){
      let tenant_details = {
          id: this.tenantForm.get('tenant').value,
          leaseId: this.myLeaseId,
          propertyId: this.propertyId,
          isLeased: '1',
      };

      
      
      

     /* this.propertyService.updateTenantStatus(tenant_details)
        .subscribe(()=> this.goBack())  */
     
    this.propertyService.updateTenantStatus(tenant_details).then((data) => {
               // this.properties = data;
                //console.log('success')
               //Update Property Status
                  let property_details = {
                    id: this.propertyId,
                  };
                  
                   this.propertyService.updatePropertyStatus(property_details).then((data) => {
                       
                          console.log('Success Update Property Status')
                          }, (err) => {
                            console.log(err);
                          });         


                }, (err) => {
                  console.log(err);
                });    
        

  }
  getUnLeasedTenants(){

    var info = {
      managerId:this.managerID
    };
    this.propertyService.getUnLeasedTenants(info).then(mytenants=>{
      this.unLeasedTenants = mytenants;
      console.log(this.unLeasedTenants)
    })
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
  }
  goBack(){
    console.log('Added Lease & Updated Tenant');
  } 
  getProperty(propertyId){
    console.log('Getting Property Of Id... '+propertyId);
      this.propertyService.getPropertyById(propertyId).then((data) => {
         this.property = data;
         this.uniqId = this.property.uniqId
         this.propertyName = this.property.name;
         this.rent = this.property.rate;
         this.latepenalty = this.property.latepenalty;
         this.deposit = this.property.deposit;
         this.petsAllowed = this.property.petsAllowed;
         
         
         /*  this.bedrooms = this.properties.bedrooms;
          this.bathrooms = this.properties.bathrooms;
          this.size = this.properties.size;
          this.heating = this.properties.heating;
          this.yearBuilt = this.properties.yearBuilt;
          this.petsAllowed = this.properties.petsAllowed;
          this.parking = this.properties.parking;
          this.deposit = this.properties.deposit;
          
          this.address = this.properties.address;
          this.desc = this.properties.desc;
          this.style = this.properties.style;
          this.type = this.properties.type;
          this.featured_img = this.properties.featured_img;
          this.propertyImages = this.properties.property_images;
          localStorage.setItem('MyPROPERTY_ID',this.prop_id);
          localStorage.setItem('UniqueId',this.uniqid)
          localStorage.setItem("GALLERY",JSON.stringify(this.propertyImages)) */
        }, (err) => {
            console.log(err);
        });
  }
}
