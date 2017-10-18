import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';

import { PropertyService } from '../service/property.service';
import { CurrencyPipe } from '@angular/common';
import { FileUploader } from 'ng2-file-upload';
import * as moment from 'moment';
@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
  
})
export class ViewPropertyComponent implements OnInit {
  isValid = true;
  images;
 showDialog = false;
 activeColor: string = 'green';
 baseColor: string = '#ccc';
 iconColor: string = 'green';
 borderColor: string = '#ddd';
 overlayColor: string = 'rgba(255,255,255,0.5)';
 
 dragging: boolean = false;
 loaded: boolean = false;
 imageLoaded: boolean = false;
 imageSrc: string = ''; 
 
public uploader : FileUploader = new FileUploader({url:'http://localhost:8080/upload'}); 
public uploader_multi : FileUploader = new FileUploader({url:'http://localhost:8080/upload_multi'}); 

/* 
 public uploader:FileUploader = new FileUploader({
                         url: 'user/filesupload',
                         type: 'post',
                         formData: [{master: master, user_id: $scope.current_instance, folder_id: $scope.parent_id}],
                         headers: {
                         'Authorization': 'Basic 123445'
                         },
                         }); */
 propertyName:any; rent:any; bedrooms:any; bathrooms:any; propertyImages:any;
 size:any; heating:any; yearBuilt:any; petsAllowed:any; tenantUniqId:any;
 parking:any; deposit:any; latepenalty:any; address:any;
 desc:any; type:any; style:any; prop_id:any; featured_img:any;
 isLeased:any;leaseData:any;tenantName:any;leaseTerm:any;leaseStart:any;
 leaseEnd:any; amenities:any;public properties: any;hoaName:any;hoaAddress:any;hoaPhone:any;hoaFee:any;
 feeSchedule:any;
 

 amenitiesfc = new FormControl('', [
     Validators.required,
     ] );  

 hoaNamefc = new FormControl('', [
             Validators.required,
             ] ); 
 hoaPhonefc = new FormControl('', [
             Validators.required,
             ] );            
 hoaAddressfc = new FormControl('', [
             Validators.required,
             ] ); 
 hoaFeefc = new FormControl('', [
             Validators.required,
             ] ); 
 hoafeeScefc = new FormControl('', [
             Validators.required,
             ] ); 
                 

 amenitiesForm = new FormGroup({
     amenities: this.amenitiesfc
    });
 hoaForm = new FormGroup({
     hoaName: this.hoaNamefc,
     hoaAddress: this.hoaAddressfc,
     hoaPhone: this.hoaPhonefc,
     hoaFee: this.hoaFeefc,
     feeSchedule: this.hoafeeScefc,
    });



constructor(public route:ActivatedRoute,public propertyService : PropertyService,
  public router:Router) {


     this.uploader.onBuildItemForm = (item, form) => {
         form.append('prop_id', this.prop_id);
    };
    this.uploader_multi.onBuildItemForm = (item, form) => {
         form.append('prop_id', this.prop_id);
    };
     this.uploader.onCompleteItem = (item) => {
         console.log('On Upload Completed');
         this.router.navigate(['/property/leased-properties/'])
     };
     this.uploader_multi.onCompleteItem = (item) => {
         console.log('On MULTI >>>>>>>Upload Completed');
         this.router.navigate(['/property/leased-properties/'])
         
     };

  }

 ngOnInit() {
     this.getProperty();

 }
  uploadImage() {
 console.log('Uploading Image');
}
 handleDragEnter() {
         this.dragging = true;
 }

 ConfirmUpload(){
     console.log('Confirm Upload...');
     alert('Image Uploaded');
 }

 CancelUpload(){
     console.log('Cancel Upload...');
 }

 handleDragLeave() {
     this.dragging = false;
 }
 
 handleDrop(e) {
     e.preventDefault();
     this.dragging = false;
     this.handleInputChange(e);
 }
 
 handleImageLoad() {
     this.imageLoaded = true;
     this.iconColor = this.overlayColor;
 }
  
 handleInputChange(e) {
     var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

     var pattern = /image-*/;
     var reader = new FileReader();

     if (!file.type.match(pattern)) {
         alert('invalid format');
         return;
     }

     this.loaded = false;

     reader.onload = this._handleReaderLoaded.bind(this);
     reader.readAsDataURL(file);
 }
 
 _handleReaderLoaded(e) {
     var reader = e.target;
     this.imageSrc = reader.result;
     this.loaded = true;
 }
 
 _setActive() {
     this.borderColor = this.activeColor;
     if (this.imageSrc.length === 0) {
         this.iconColor = this.activeColor;
     }
 }
 
 _setInactive() {
     this.borderColor = this.baseColor;
     if (this.imageSrc.length === 0) {
         this.iconColor = this.baseColor;
     }
 }

// model = new Property();
uniqid = this.route.snapshot.params['uniqId'];


 getProperty(){


     console.log(this.uniqid)
   this.propertyService.getProperty(this.uniqid).then((data) => {
       this.properties = data;
       console.log(this.properties);
       this.prop_id = this.properties._id;
       this.propertyName = this.properties.name;
       this.rent = this.properties.rate;
       this.bedrooms = this.properties.bedrooms;
       this.bathrooms = this.properties.bathrooms;
       this.size = this.properties.size;
       this.isLeased = this.properties.isLeased;
       this.heating = this.properties.heating;
       this.yearBuilt = this.properties.yearBuilt;
       this.petsAllowed = this.properties.petsAllowed;
       this.parking = this.properties.parking;
       this.deposit = this.properties.deposit;
       this.latepenalty = this.properties.latepenalty;
       this.address = this.properties.address;
       this.desc = this.properties.desc;
       this.style = this.properties.style;
       this.type = this.properties.type;
       this.amenities = this.properties.amenities
       this.hoaName = this.properties.hoaName;
       this.hoaAddress = this.properties.hoaAddress;
       this.hoaPhone = this.properties.hoaPhone;
       this.hoaFee = this.properties.hoaFee;
       this.feeSchedule = this.properties.feeSchedule;

       this.featured_img = this.properties.featured_img;
       this.propertyImages = this.properties.property_images;
       this.amenitiesForm.controls['amenities'].setValue(this.amenities);

       this.hoaForm.controls['hoaName'].setValue(this.hoaName);
       this.hoaForm.controls['hoaAddress'].setValue(this.hoaAddress);
       this.hoaForm.controls['hoaPhone'].setValue(this.hoaPhone);
       this.hoaForm.controls['hoaFee'].setValue(this.hoaFee);
       this.hoaForm.controls['feeSchedule'].setValue(this.feeSchedule);
       
      
       
       //console.log(this.propertyImages);

       //console.log('My Prop ID '+this.prop_id);
       console.log('Is Leased '+this.isLeased);
       if(this.isLeased == 1){
             console.log('Get Lease Details');
             var pobj = {
                 propertyId:this.prop_id
             }
             this.propertyService.getPropLease(pobj).then((data)=>{
                 //console.log('Getting Prop Lease'+ data)
                 this.leaseData = data;
                 console.log(this.leaseData);
                 this.tenantName = this.leaseData.tenantId.firstName;
                 this.tenantUniqId = this.leaseData.tenantId.uniqId;
                 this.leaseTerm = this.leaseData.leaseTerm;
                 this.leaseStart = this.leaseData.leaseStart;
                 
                 this.leaseEnd = this.leaseData.leaseEnd;
                 console.log('TENANT NAME '+ this.tenantName)
                 console.log('TENANT uniquId '+ this.tenantUniqId)

                 console.log('HERE  '+JSON.stringify(this.leaseData,null,4));
             },(err)=>{
                 console.log(err)
             })
       }
       localStorage.setItem('MyPROPERTY_ID',this.prop_id);
       localStorage.setItem('UniqueId',this.uniqid)
       localStorage.setItem("GALLERY",JSON.stringify(this.propertyImages))
     }, (err) => {
         console.log(err);
     });
    
     
}
UpdateHoa(){
     let prop_hoa = {
         hoaName: this.hoaForm.get('hoaName').value,
         hoaAddress: this.hoaForm.get('hoaAddress').value,
         hoaPhone: this.hoaForm.get('hoaPhone').value,
         hoaFee: this.hoaForm.get('hoaFee').value,
         feeSchedule: this.hoaForm.get('feeSchedule').value,
         }
 console.log(JSON.stringify(prop_hoa));  
 }

 editProperty(){
     localStorage.setItem('MYPROPID',this.prop_id);
     this.router.navigate(['/manager/properties/edit-property/'])
 }
 UpdateAmenities(){
     console.log('Update Amenities'); 
     let prop_amenities = {
             name: this.amenitiesForm.get('amenities').value,
     }
     console.log(JSON.stringify(prop_amenities));
 }
}
