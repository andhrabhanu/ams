import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {ManagerService} from '../service/manager.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-manager-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    ]);

  email = new FormControl('', [
      Validators.required,
      ]);
  password = new FormControl('', [
      Validators.required,
      ]);
  registerForm = new FormGroup({
        name: this.name,
        username: this.email,
        email: this.email,
        password: this.password,
});     
  constructor(
              private managerService:ManagerService,
              private flashMessage:FlashMessagesService,
              private router: Router,public snackBar: MdSnackBar) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name: this.registerForm.get('name').value,
      email: this.registerForm.get('email').value,
      password:this.registerForm.get('password').value,
    };
    console.log(JSON.stringify(user,null,4))
    

    
  this.managerService.registerManager(user).then((data) => {
      console.log('Success Registered User');
     // this.router.navigate(['/manager/dashboard']);
      var message = 'Manager Registered, Please Login To Continue';
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

