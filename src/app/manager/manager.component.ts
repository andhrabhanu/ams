import { Component } from '@angular/core';
import { ManagerService } from '../manager/service/manager.service';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
@Component({
  templateUrl: 'manager.component.html'
  })
export class ManagerComponent { 
  constructor(private managerService:ManagerService, private router: Router,
    public snackBar: MdSnackBar){

    }
    onLogoutClick(){
      this.managerService.logout();
      //this.router.navigate(['admin']);
      var message = 'Manager Logged Out';
      this.openSnackBar(message)
      return false;
    }
    GoToRegister(){
      this.router.navigate(['/manager/manager-register']);
    }
    openSnackBar(message) {
      this.snackBar.open(message, 'Close', { duration: 5000});
    }
    
}
    