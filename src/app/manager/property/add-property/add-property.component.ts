import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { PropertyService } from '../service/property.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  public userType:any; public managerID:any;
  
      
  
           // manager_id = new FormControl(''); 
           // isLeased = new FormControl('0');     
            namej = new FormControl('');
             
        name = new FormControl('', [
                    Validators.required,
                    ]); 
          
            desc = new FormControl('', [
                    Validators.required
                    ]);
            address = new FormControl('', [
                    Validators.required
                    ]);
  
            rate = new FormControl('', [
                    Validators.required
                    ]);
            amenities = new FormControl('', [
                    Validators.required
                    ]);         
            
            
            deposit = new FormControl('', [
                    Validators.required
                    ]);
  
            latepenalty = new FormControl('', [
                    Validators.required
                    ]);        
            type = new FormControl('', [
                    Validators.required
                    ]);
            style = new FormControl('', [
                    Validators.required
                    ]); 
            petsAllowed = new FormControl('', [
                    Validators.required
                    ]);
            yearBuilt = new FormControl('', [
                    Validators.required
                    ]);
            size = new FormControl('', [
                    Validators.required
                    ]);
            bedrooms = new FormControl('', [
                    Validators.required
                    ]);
            bathrooms = new FormControl('', [
                    Validators.required
                    ]);
            parking = new FormControl('', [
                    Validators.required
                    ]);
            heating = new FormControl('', [
                    Validators.required
                    ]);
            hoaName = new FormControl('', [
                    Validators.required
                    ]);
            hoaAddress = new FormControl('', [
                    Validators.required
                    ]);
            hoaPhone = new FormControl('', [
                    Validators.required
                    ]);
            hoaFee = new FormControl('', [
                    Validators.required
                    ]);
            feeSchedule = new FormControl('', [
                    Validators.required
                    ]);                                      
                        
            map = new FormControl('');
  
          //Database Values  
          propertyForm = new FormGroup({
  
          //manager_id: this.manager_id,
  
                  name: this.name,
                  desc: this.desc,
                  address: this.address,
                  
                  //isLeased:this.isLeased,
                  
                  rate: this.rate,
                  latepenalty: this.latepenalty,
                  deposit: this.deposit,
                  petsAllowed: this.petsAllowed,
                  amenities:this.amenities,
  
                  type: this.type,
                  style: this.style,
                  yearBuilt: this.yearBuilt,
                  size:this.size,
                  parking: this.parking,
                  heating:this.heating,
                  bedrooms:this.bedrooms,
                  bathrooms:this.bathrooms,
                  //active
                  hoaName: this.hoaName,
                  hoaAddress: this.hoaAddress,
                  hoaPhone: this.hoaPhone,
                  hoaFee: this.hoaFee,
                  feeSchedule: this.feeSchedule,
                  map: this.map,
  }); 
    constructor(public propertyService:PropertyService,
                 public route:ActivatedRoute,
                 public router:Router,private _fb: FormBuilder,
                 public snackBar: MdSnackBar) {
                  
                        //Getting User Type      
                  var manager = localStorage.getItem('manager');
                  console.log('Manager UserType')
                  var parsing_manager  = JSON.parse(manager);
                  this.userType = parsing_manager.userType;    
                  this.managerID = parsing_manager._id;
                  console.log('Manager Id'+ this.managerID)  
              
                  
                         
          }
  
    ngOnInit() {

    }
    onFormSubmit(): void {
            
    let prop_details = {
        managerId:this.managerID, 
        uploadedBy:this.userType,
        name: this.propertyForm.get('name').value,
        desc: this.propertyForm.get('desc').value,
        address: this.propertyForm.get('address').value,
        isLeased: '0',
        rate: this.propertyForm.get('rate').value,
        latepenalty:this.propertyForm.get('latepenalty').value,
        deposit: this.propertyForm.get('deposit').value,
        petsAllowed: this.propertyForm.get('petsAllowed').value,
        amenities: this.propertyForm.get('amenities').value,
        type: this.propertyForm.get('type').value,
        style: this.propertyForm.get('style').value,
        yearBuilt: this.propertyForm.get('yearBuilt').value,
        size: this.propertyForm.get('size').value,
        parking: this.propertyForm.get('parking').value,
        heating: this.propertyForm.get('heating').value,
        bedrooms: this.propertyForm.get('bedrooms').value,
        bathrooms: this.propertyForm.get('bathrooms').value,
        active: '1',
        hoaName: this.propertyForm.get('hoaName').value,
        hoaAddress: this.propertyForm.get('hoaAddress').value,
        hoaPhone: this.propertyForm.get('hoaPhone').value,
        hoaFee: this.propertyForm.get('hoaFee').value,
        feeSchedule: this.propertyForm.get('feeSchedule').value,
        googleMap: this.propertyForm.get('map').value,
          
  
          //role: this.role
      };
  
      console.log(JSON.stringify(prop_details,null,4));
           
  
            this.propertyService.addProperty(prop_details).then((data) => {
                         
                            console.log('Success Created Property')
                            var message = 'Property Created'
                            this.openSnackBar(message)
  
                            }, (err) => {
                              console.log(err);
                              var message = 'Failed Creating'
                              this.openSnackBar(message)
                            });  
      } 
     goBack(){
      console.log('Added Property');
    } 
     openSnackBar(message) {
          this.snackBar.open(message, 'Close', { duration: 5000});
        }
  
      }
  