import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import {SuperAdminService} from '../service/super-admin.service';
 import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-navbar-superadmin',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router,
   private superAdminService:SuperAdminService,
    public snackBar: MdSnackBar) { }
     btnClick = function () {
      
        this.router.navigateByUrl('/admin/dashboard');
  };
   onLogoutClick(){
    this.superAdminService.logout();
    this.router.navigate(['super-admin']);
    var message = 'Super Admin Logged Out';
    this.openSnackBar(message)
    return false;
  } 


  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
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
