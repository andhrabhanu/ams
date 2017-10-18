import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter,Directive, forwardRef, 
  Attribute,SimpleChanges } from '@angular/core';
import { NG_VALIDATORS,Validator,
    Validators,AbstractControl,ValidatorFn,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { RequestService } from '../service/request.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import { Request } from '../request';
import * as moment from 'moment';
import { ManagerService } from '../../service/manager.service';

    

@Component({
  selector: 'app-assign-request',
  templateUrl: './assign-request.component.html',
  styleUrls: ['./assign-request.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]

})
export class AssignRequestComponent implements OnInit {
  public serviceCategories:any; public managerID:any;
  public serviceResources:any;
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public managerService:ManagerService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
      var manager = localStorage.getItem('manager');
      console.log('Manager UserType')
      var parsing_manager  = JSON.parse(manager);
      this.managerID = parsing_manager._id;
      console.log('Manager Id '+ this.managerID) 
      //this.getServiceCategories();
      //this.getServiceResources();
     }

  ngOnInit() {
  }
  close() {
    
     this.visible = false;
     this.visibleChange.emit(this.visible);
   }
/*    getServiceCategories(){
    this.managerService.getServiceCategories().then((data) => {
    this.serviceCategories = data;
    console.log(this.serviceCategories);

    }, (err) => {
     console.log(err);
    });
 } */
/*  getServiceResources(){
    var info = {
      managerId:this.managerID
    }
    this.managerService.getServiceResources(info).then((data) => {
    this.serviceResources = data;
    console.log(this.serviceResources);

    }, (err) => {
     console.log(err);
    });

} */

 onFormSubmit(){
   console.log('Form Submitted');

 }
   

}
