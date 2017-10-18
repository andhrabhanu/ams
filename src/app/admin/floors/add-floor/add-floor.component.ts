import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {FloorService} from '../../floors/floor.service';
import {AdminService} from '../../service/admin.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.css']
})
export class AddFloorComponent implements OnInit {
  public response :any; 
  public status: any;
   public msgResponse:any
  public apartmentId:any;
  constructor(public floorService:FloorService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar,adminService:AdminService) {

      //Write Check Auth Method & return a msg if not logged IN

 





      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id; 
     }
    floor_no = new FormControl('', [
      Validators.required,
      ]); 
      floorForm = new FormGroup({
        floor_no: this.floor_no,
        
      })  
  ngOnInit() {
  }
  onFormSubmit(): void {
    
    let floor_details = {
      floor_no: this.floorForm.get('floor_no').value,
      apartmentId: this.apartmentId
    
    };

    console.log(JSON.stringify(floor_details,null,4));
      

        this.floorService.addFloor(floor_details).then((data) => {
                       this.response = data;
                       //console.log(this.response)
                       
                       var message = "Floor Created";
                        this.openSnackBar(message);   
                       }, (err) => {
                          console.log(err);
                         // var message = 'Failed Creating'
                         // this.openSnackBar(message)
                        });  
} 
openSnackBar(message) {
  console.log('Message is '+message);
  this.snackBar.open(message, 'Close', { duration: 5000});
}

}
