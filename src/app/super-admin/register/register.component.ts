import { Component, OnInit } from '@angular/core';
import {SuperAdminService} from '../service/super-admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  
  email:String;
  password:String;
  constructor(
              private superAdminService:SuperAdminService,
              private flashMessage:FlashMessagesService,
              private router: Router,public snackBar: MdSnackBar) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name:this.name,
     
      email:this.email,
      password:this.password,
    }

    //Required Fields
  /*   if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill all Fields',{cssClass:'alert-danger',timeOut:3000});
      return false;
    } */

//Validate Email
    /* if(!this.validateService.valdiateEmail(user.email)){
      this.flashMessage.show('Please use a valid email',{cssClass:'alert-danger',timeOut:3000});
      return false;
    } */


  //Register user
/*   this.adminService.registerUser(user).subscribe(data=>{
     if(data.success){
       //this.flashMessage.show('You are Registered',{cssClass:'alert-success',timeOut:3000});
       console.log('You are Registered');
       //this.router.navigate(['/login']);
     }else{
       //this.flashMessage.show('Something went Wrong',{cssClass:'alert-danger',timeOut:3000});
       console.log('You are Logged In');
       //this.router.navigate(['/register']);
      }
  }); */


   this.superAdminService.registerUser(user).then((data) => {
      console.log('Success Registered User');
     // this.router.navigate(['/admin/admin-login']);
      var message = 'Super Admin Registered';
      this.openSnackBar(message)
      }, (err) => {
      console.log(err);
      var message = 'Failed Creating'
      this.openSnackBar(message)
      }); 


  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
  }
}

