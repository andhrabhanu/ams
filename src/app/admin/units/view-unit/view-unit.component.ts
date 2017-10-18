import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UnitService } from '../../units/unit.service';
import * as moment from 'moment';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit {
  public unit:any; public unit_id:any; public floors:any;
  public apartmentId:any;
  floor_no = new FormControl('', [Validators.required,]);
  unit_no = new FormControl('', [Validators.required,]);
  
  unitForm = new FormGroup({
    floor_no: this.floor_no,
    unit_no: this.unit_no,
   
    });
  
  constructor(public dialog: MdDialog,fb: FormBuilder, public snackBar: MdSnackBar,
    public route:ActivatedRoute,public unitService : UnitService,
    public router:Router) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId;
      this.getUnit();
      this.getFloors();  
      
  }
   uniqId = this.route.snapshot.params['uniqId'];
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
   getUnit(){
     console.log('Getting floor of '+this.uniqId);
     this.unitService.getUnit(this.uniqId).then((data) => {
      this.unit = data;
      this.unit_id = this.unit._id;
     
      console.log(this.unit);
      //Write if Loop if Tenant has Leased or any


      this.unitForm.controls['unit_no'].setValue(this.unit.unit_no);
      this.unitForm.controls['floor_no'].setValue(this.unit.floor_no);
     
     

    }, (err) => {
        console.log(err);
    }); 

   }

  ngOnInit() {
  }
  updateUnit(){
    
    let unit_details = {
      id: this.unit_id,
      floor_no: this.unitForm.get('floor_no').value,
      unit_no: this.unitForm.get('unit_no').value,
    };

  console.log(JSON.stringify(unit_details));


       this.unitService.updateUnit(unit_details).then((data) => {
           console.log('Unit Updated')
              var message = 'Unit Updated'
              this.openSnackBar(message);

              }, (err) => {
                console.log(err);
                var message = 'Failed Updating'
                this.openSnackBar(message)
              });  
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
    //this._location.back();
}

}
