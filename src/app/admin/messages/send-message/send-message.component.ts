export interface Unit {
  id: string;
  itemName: string;
  email:string;
}
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Message } from '../Message';
import {MdSnackBar} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  owners: any;  
  units: any;  
  public years:any;
  public months:any;
  public ownerUnits:any;
  finalUnits: Unit[] = [];
  apartmentId: any;
  model = new Message('', '', '');
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
      this.getOwners();
      this.dropdownList = this.finalUnits;
      this.selectedItems=[];
      this.dropdownSettings = { 
        singleSelection: false, 
        text:"Select Units",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes:"myclass custom-class",
        searchPlaceholderText:"Search"
      };
  }
  onItemSelect(item:any){
    console.log('Selected Item');
    console.log(item);
   //console.log(this.selectedItems2);
}
OnItemDeSelect(item:any){
   console.log('Deselected Item');
   console.log(item);
   //console.log(this.selectedItems2);
}
onSelectAll(items: any){
   //console.log(items);
}
onDeSelectAll(items: any){
   console.log(items);
}

  
  getOwners(){
    var aparinfo = {
      apartmentId: this.apartmentId
    }
    this.adminService.getAllUnits(aparinfo).then((data) => {
      this.units = data;

            this.units.forEach(element => {
            var output= {
                id: element._id,
                itemName: element.unit_no,
               email:   element.ownerId.email
             }
             console.log(JSON.stringify(output,null,4))
             
             this.finalUnits.push(output); 
             });




      console.log(JSON.stringify(this.units,null,4));
     }, (err) => {
    console.log(err);
    });
  }
  onSubmit() { 
    console.log('Form Submmited');
         var msgDetails = {
            apartmentId:this.apartmentId,
            mailList: this.selectedItems,
            subject: this.model.subject,
            body: this.model.body,
            date: moment().format('DD MMM YY, h:mm a'),
          
          }
          console.log(JSON.stringify(msgDetails,null,4)); 
  
       
         this.adminService.sendMessage(msgDetails).then((data) => {
            
            
            var message = "Message Sent";
             this.openSnackBar(message);   
            }, (err) => {
               console.log(err);
       
             });  
    }
    openSnackBar(message) {
      console.log('Message is '+message);
      this.snackBar.open(message, 'Close', { duration: 5000});
  } 

}
