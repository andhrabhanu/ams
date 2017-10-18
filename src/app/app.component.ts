import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from '../app/admin/service/admin.service';
import {SuperAdminService} from '../app/super-admin/service/super-admin.service';
import { ManagerService } from '../app/manager/service/manager.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

  
})
export class AppComponent { 
  constructor(private router: Router,
    private adminService:AdminService, private managerService:ManagerService,
    private superAdminService:SuperAdminService,
    public snackBar: MdSnackBar) { }
  
  
 
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
  }
  gotoHome(){
    this.router.navigate(['/home']);
  }
 
  GoToManager(){
    this.router.navigate(['/manager']);
  }
  GoToAdmin(){
    this.router.navigate(['/admin']);
  }
}
    