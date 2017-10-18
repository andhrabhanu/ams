import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FloorService } from '../../floors/floor.service';
import * as moment from 'moment';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-view-floor',
  templateUrl: './view-floor.component.html',
  styleUrls: ['./view-floor.component.css']
})
export class ViewFloorComponent implements OnInit {
  public floor:any; public floor_id:any;
  floor_no = new FormControl('', [Validators.required,]);
  floorForm = new FormGroup({
    floor_no: this.floor_no,
   });
  
  constructor(public dialog: MdDialog,fb: FormBuilder, public snackBar: MdSnackBar,
    public route:ActivatedRoute,public floorService : FloorService,
    public router:Router) {
    this.getFloor();
   }
   uniqId = this.route.snapshot.params['uniqId'];
   getFloor(){
     console.log('Getting floor of '+this.uniqId);
     this.floorService.getFloor(this.uniqId).then((data) => {
      this.floor = data;
      this.floor_id = this.floor._id;
     
      console.log(this.floor);
      //Write if Loop if Tenant has Leased or any


      this.floorForm.controls['floor_no'].setValue(this.floor.floor_no);
     

    }, (err) => {
        console.log(err);
    }); 

   }

  ngOnInit() {
  }
  updateFloor(){
    
    let floor_details = {
      id:this.floor_id,
      floor_no: this.floorForm.get('floor_no').value,
     

  //role: this.role
  };

  console.log(JSON.stringify(floor_details));


 this.floorService.updateFloor(floor_details).then((data) => {
           console.log('Floor Updated')
              var message = 'Floor Updated'
              this.openSnackBar(message);

              }, (err) => {
                console.log(err);
                var message = 'Failed Creating'
                this.openSnackBar(message)
              });  
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
    //this._location.back();
}

}
