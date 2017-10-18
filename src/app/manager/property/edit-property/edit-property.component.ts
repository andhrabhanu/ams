import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { PropertyService } from '../service/property.service';
import {MdSnackBar} from '@angular/material';
import {Location} from '@angular/common';


@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  public propId: any; public property:any; public propertyName:any;
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

  constructor(private _location: Location,
    public snackBar: MdSnackBar,
    public route:ActivatedRoute,
    public propertyService : PropertyService,
    public router:Router) {
        console.log('CHECKING INSIDE EDIT PROP of Manager');

     }

  ngOnInit() {
       this.getProperty();
    }
  getProperty(){

    var info = {
        id:localStorage.getItem('MYPROPID')
    }
    this.propertyService.findById(info).then((data) => {
        this.property = data;
        console.log(this.property);
        this.propertyName = this.property.name;
    
        this.propertyForm.controls['name'].setValue(this.property.name);
        this.propertyForm.controls['desc'].setValue(this.property.desc);
        this.propertyForm.controls['address'].setValue(this.property.address);
        this.propertyForm.controls['rate'].setValue(this.property.rate);
        this.propertyForm.controls['deposit'].setValue(this.property.deposit);
        this.propertyForm.controls['latepenalty'].setValue(this.property.latepenalty);
        this.propertyForm.controls['petsAllowed'].setValue(this.property.petsAllowed);
        this.propertyForm.controls['amenities'].setValue(this.property.amenities);
        this.propertyForm.controls['type'].setValue(this.property.type);
        this.propertyForm.controls['style'].setValue(this.property.style);
        this.propertyForm.controls['yearBuilt'].setValue(this.property.yearBuilt);
        this.propertyForm.controls['size'].setValue(this.property.size);
        this.propertyForm.controls['parking'].setValue(this.property.parking);
        this.propertyForm.controls['heating'].setValue(this.property.heating);
        this.propertyForm.controls['bedrooms'].setValue(this.property.bedrooms);
        this.propertyForm.controls['bathrooms'].setValue(this.property.bathrooms);
        this.propertyForm.controls['hoaName'].setValue(this.property.hoaName);
        this.propertyForm.controls['hoaAddress'].setValue(this.property.hoaAddress);
        this.propertyForm.controls['hoaPhone'].setValue(this.property.hoaPhone);
        this.propertyForm.controls['hoaFee'].setValue(this.property.hoaFee);
        this.propertyForm.controls['address'].setValue(this.property.address);
        this.propertyForm.controls['feeSchedule'].setValue(this.property.feeSchedule);
        this.propertyForm.controls['map'].setValue(this.property.map);

    }, (err) => {
          console.log(err);
      });
    
  }
  onFormSubmit(): void {
    
        let prop_details = {
            id:localStorage.getItem('MYPROPID'),
            manager_id:'Mid1',
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
            map: this.propertyForm.get('map').value,

        //role: this.role
        };

        console.log(JSON.stringify(prop_details));
   

   this.propertyService.updateProperty(prop_details).then((data) => {
                 console.log('Updated Property')
                    var message = 'Property Updated'
                    this.openSnackBar(message);

                    }, (err) => {
                      console.log(err);
                      var message = 'Failed Creating'
                      this.openSnackBar(message)
                    });  
}
openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
    this._location.back();
}



}
