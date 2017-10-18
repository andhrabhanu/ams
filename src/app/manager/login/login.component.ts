import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ManagerService} from '../service/manager.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-manager-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email = new FormControl('', [
    Validators.required,
    ]);
  password = new FormControl('', [
    Validators.required,
    ]);   

  loginForm = new FormGroup({
              email: this.email,
              password: this.password,
     });
    
  public managerData:any;

  constructor(public snackBar: MdSnackBar,
              private managerService:ManagerService,
              private flashMessage:FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      email: this.loginForm.get('email').value,
      password:this.loginForm.get('password').value,
    };
       console.log(JSON.stringify(user,null,4))
     

      //Login user
     this.managerService.authenticateManager(user).then((data) => {
        console.log('Successfully Logged')
        this.managerData = data;
        console.log(JSON.stringify(this.managerData,null,4))
        this.managerService.storeManagerData(this.managerData.token,this.managerData.manager);
        this.router.navigate(['/manager/dashboard']);
        var message = 'Manager Logged In'
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

