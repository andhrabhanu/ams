import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import {AdminService} from '../service/admin.service';
 import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public admin_name:any; public apartmentName:any;
  constructor(private router: Router,
   private adminService:AdminService,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.admin_name = parsing.name;
      this.apartmentName = parsing.apartmentId.name
      console.log('Admin Name '+ this.admin_name);
     }
     btnClick = function () {
      
        this.router.navigateByUrl('/admin/dashboard');
  };
   onLogoutClick(){
    this.adminService.logout();
    this.router.navigate(['admin']);
    var message = 'Admin Logged Out';
    this.openSnackBar(message)
    return false;
  } 


  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
  }
  gotoProfile(){
    console.log('Profile Page');
  }
  gotoHome(){
    this.router.navigate(['/home']);
  }
  addManager(){
    this.router.navigate(['/admin/add-manager']);
  }
  goManagers(){
    this.router.navigate(['/admin/list-manager']);
  }
  goAddServiceCat(){
    this.router.navigate(['/admin/add-servicecategory']);
  }
}
