import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperAdminService } from '../super-admin/service/super-admin.service';
import {MdSnackBar} from '@angular/material';

@Component({
  templateUrl: 'super-admin.component.html'
  })
export class SuperAdminComponent { 
  constructor(private router: Router,
    private superAdminService:SuperAdminService,
    public snackBar: MdSnackBar) {

    }
    onLogoutClick(){
      this.superAdminService.logout();
      this.router.navigate(['admin']);
      var message = 'Admin Logged Out';
      this.openSnackBar(message)
      return false;
    }
    openSnackBar(message) {
      this.snackBar.open(message, 'Close', { duration: 5000});
    }
}
    