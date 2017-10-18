import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {UnitService} from '../../units/unit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent{
  public floors:any; public apartmentId:any;
  floor_no = new FormControl('', [
           Validators.required,
          ]);
  unit_no = new FormControl('', [
            Validators.required,
           ]);
           unitForm = new FormGroup({
             floor_no:this.floor_no,
             unit_no: this.unit_no
           });                 

  constructor(public unitService:UnitService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
    
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
      this.getFloors();
     }


  getFloors(){
    var info = {
      apartmentId: this.apartmentId
    }
    //Get all Floors
    this.unitService.getFloors(info).then((data) => {
            this.floors = data;
            console.log(this.floors);
           }, (err) => {
          console.log(err);
    });
  }
  onFormSubmit(){
    //Get all Floors
    let unit_details = {
      floor_no:this.unitForm.get('floor_no').value,
      unit_no:this.unitForm.get('unit_no').value,
      apartmentId:this.apartmentId
    };
    console.log(JSON.stringify(unit_details,null,4));
     this.unitService.addUnit(unit_details).then((data) => {
      var message = "Unit Created";
      this.openSnackBar(message);  
           }, (err) => {
          console.log(err);
          var message = "Unit Created";
          this.openSnackBar(message);
    }); 
  }
  openSnackBar(message) {
    console.log('Message is '+message);
    this.snackBar.open(message, 'Close', { duration: 5000});
  }

}
