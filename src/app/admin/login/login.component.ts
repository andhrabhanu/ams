import { Component, OnInit } from '@angular/core';
import {AdminService} from '../service/admin.service';
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
  public show = true;
  public showfp = true;
  public adminData:any;

  constructor(public snackBar: MdSnackBar,private adminService:AdminService,
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
     

      //Login user
      this.adminService.authenticateUser(user).then((data) => {
        console.log('Success Created Property')
        this.adminData = data;
        console.log(JSON.stringify(this.adminData,null,4))
        this.adminService.storeAdminData(this.adminData.token,this.adminData.admin);
        this.router.navigate(['/admin/dashboard']);
        var message = 'Admin Logged In'
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
  forgotPassword(){
    console.log('Forgot Password');
   this.show = false;

    this.router.navigate(['admin-forgotpassword']);
   
    //Now display alert box

  }

}

