import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {MemberTypeService} from '../memberType.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-member-type',
  templateUrl: './add-member-type.component.html',
  styleUrls: ['./add-member-type.component.css']
})
export class AddMemberTypeComponent  {
  public apartmentId:any;
  constructor(public memberTypeService:MemberTypeService,
    public route:ActivatedRoute,
    public router:Router,private _fb: FormBuilder,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId;
     }
     member_type = new FormControl('', [
      Validators.required,
      ]); 
      memberForm = new FormGroup({
        member_type: this.member_type,
        
      })
      onFormSubmit(): void {
        
        let memberTypeDetails = {
          member_type: this.memberForm.get('member_type').value,
          apartmentId: this.apartmentId
        
        };
    
        console.log(JSON.stringify(memberTypeDetails,null,4));
          
    
             this.memberTypeService.addmembertype(memberTypeDetails).then((data) => {
                           //this.response = data;
                           console.log(data)
                           
                           var message = "Member Type Created";
                            this.openSnackBar(message);   
                           }, (err) => {
                              console.log(err);
                              var message = 'Failed Creating'
                              this.openSnackBar(message)
                            });  
    } 
    openSnackBar(message) {
      console.log('Message is '+message);
      this.snackBar.open(message, 'Close', { duration: 5000});
    }

}
