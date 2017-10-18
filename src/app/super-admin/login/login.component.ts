import { Component, OnInit } from '@angular/core';
import {SuperAdminService} from '../service/super-admin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:String;
  password:String;

  public superAdminData:any;

  constructor(public snackBar: MdSnackBar,private superAdminService:SuperAdminService,
              private flashMessage:FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      email:this.email,
      password:this.password
    };
      console.log(user.email);
      console.log(user.password);
     

      //Login Super user
      this.superAdminService.authenticateUser(user).then((data) => {
        console.log('Success Logged in')
        this.superAdminData = data;
        console.log(JSON.stringify(this.superAdminData,null,4))
        this.superAdminService.storeSuperAdminData(this.superAdminData.token,this.superAdminData.superAdmin);
        this.router.navigate(['/super-admin/dashboard']);
        var message = 'Super Admin Logged In'
        this.openSnackBar(message)
        }, (err) => {
        console.log(err);
        var message = 'Failed Logging In'
        this.openSnackBar(message)
        }); 
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
  }

}

