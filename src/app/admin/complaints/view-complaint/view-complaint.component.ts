import { Component,ViewChild,Input,ElementRef, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import * as moment from 'moment';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent {
  public apartmentId:any;
  public ownerName:any;
  public ownerUnits:any;
  public complaintDate:any;
  public complaintstatus:any;
  public complaintId:any;
  public getreply:any;

  title = new FormControl('', [Validators.required,]);
  description = new FormControl('', [Validators.required,]);
  reply = new FormControl('', [Validators.required,]);
  
  complaintForm = new FormGroup({
    title: this.title,
    description: this.description,
    reply: this.reply
    
  });
  public uniqId:any; public complaint:any;
  constructor(public dialog: MdDialog,fb: FormBuilder, public snackBar: MdSnackBar,
    public route:ActivatedRoute,public adminService : AdminService,
    public router:Router) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId;
      this.uniqId = this.route.snapshot.params['uniqId'];
      
      this.getComplaint(this.uniqId);
    }

    getComplaint(uniqId){
      console.log('Get Complaint of '+uniqId);
      this.adminService.getComplaint(this.uniqId).then((data) => {
        this.complaint = data;
       
       // console.log(JSON.stringify(this.complaint,null,4));
        //Write if Loop if Tenant has Leased or any
  
        this.complaintId = this.complaint._id;
        this.ownerName = this.complaint.ownerId.name
        this.complaintstatus = this.complaint.closed;
        this.ownerUnits = this.complaint.ownerId.unit_no
        this.complaintDate = this.complaint.date;
        this.getreply = this.complaint.reply

        this.complaintForm.controls['title'].setValue(this.complaint.title);
        this.complaintForm.controls['description'].setValue(this.complaint.description);
        //this.complaintForm.controls['date'].setValue(this.complaint.date);
        
       
  
      }, (err) => {
          console.log(err);
      }); 
  }
  closeComplaint(){
    
    let complaint_details = {
      id:this.complaintId,
      reply:this.complaintForm.get('reply').value,
      }
      //console.log(JSON.stringify(complaint_details,null,4));
      this.adminService.addReplyandClose(complaint_details).then((data) => {
        console.log('Complaint Closed...');
        var message = "Complaint Created";
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
