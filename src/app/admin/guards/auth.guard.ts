import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private adminService:AdminService ,private router: Router ){

    }

    canActivate(){
      if(this.adminService.loggedIn()){
        return true;
      }
      else{
        this.router.navigate(['admin/admin-login']);
        return false;
      }
    }
}
