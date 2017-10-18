import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from '../admin/service/admin.service';
import {MdSnackBar} from '@angular/material';

@Component({
  templateUrl: 'admin.component.html'
  })
export class AdminComponent { 
  constructor(private router: Router,
    private adminService:AdminService,
    public snackBar: MdSnackBar) {

    }
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
}
    