export interface Unit {
    id: string;
    itemName: string;
}

import { Component, OnInit } from '@angular/core';
import {Owner} from '../owner';
import {AdminService} from '../../service/admin.service';
import {MdSnackBar} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-drop-down',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
    units: any;  
    finalUnits: Unit[] = [];
    ownerData:any;
    ownerId:any;
    
    apartmentId: any;
    model = new Owner('', '', '', '', '', '');
  submitted = false;
  selectedItems2: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,
    public snackBar: MdSnackBar) {
      
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
      this.getUnits();

      this.dropdownList = this.finalUnits;
        this.selectedItems = [
                /*   {"id":2,"itemName":"Singapore"},
                {"id":3,"itemName":"Australia"},
                {"id":4,"itemName":"Canada"},
                {"id":5,"itemName":"South Korea"} , */        
            ];
        this.dropdownSettings = { 
            singleSelection: false, 
            text:"Select Units",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:"myclass custom-class"
          };
     }

  //NgModels
  public tenant:any;
  public property: any;

  ngOnInit(){            
  }
  onItemSelect(item:any){
     // console.log(item);
      //console.log(this.selectedItems2);
  }
  OnItemDeSelect(item:any){
      //console.log(item);
      //console.log(this.selectedItems2);
  }
  onSelectAll(items: any){
      //console.log(items);
  }
  onDeSelectAll(items: any){
      //console.log(items);
  }
  getUnits(){
    var aparinfo = {
      apartmentId: this.apartmentId
    }
    this.adminService.getUnits(aparinfo).then((data) => {
      this.units = data;

            this.units.forEach(element => {
            var output= {
                id: element._id,
                itemName: element.unit_no,
             }
             this.finalUnits.push(output);
             });




      //console.log(JSON.stringify(this.units,null,4));
     }, (err) => {
    console.log(err);
    });
  }
  onSubmit() { 
    console.log('Form Submmited');
        var ownerDetails ={
            apartmentId:this.apartmentId,
            name: this.model.name,
            email: this.model.email,
            password: this.model.password,
            mobile: this.model.mobile,
            address: this.model.name,
            unit_no: this.selectedItems,
        }
        console.log(this.selectedItems);

       
        //Here Add Code to Update that Unit Status
        
         

        this.adminService.addOwner(ownerDetails).then((data) => {
            var message = "Owner Created";

            this.ownerData = data;
            this.ownerId = this.ownerData._id;
            console.log('OwnerId '+ this.ownerId);
             this.selectedItems.forEach(element => {
                var info = {
                    id:element.id,
                    ownerId:this.ownerId
                } 
                console.log('ONE  '+info.id)
             this.adminService.assignUnit(info).then((data)=>{
                console.log('UPdated Unit..')
             }, (err) => {
                console.log(err);
              }); 
            });
             this.openSnackBar(message);   
            }, (err) => {
               console.log(err);
              // var message = 'Failed Creating'
              // this.openSnackBar(message)
             });   
        console.log(JSON.stringify(ownerDetails,null,4)); 
    }
    openSnackBar(message) {
        console.log('Message is '+message);
        this.snackBar.open(message, 'Close', { duration: 5000});
    }
}