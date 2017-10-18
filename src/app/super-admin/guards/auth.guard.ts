import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { SuperAdminService } from '../service/super-admin.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private superAdminService:SuperAdminService ,private router: Router ){

    }

    canActivate(){
      if(this.superAdminService.loggedIn()){
        return true;
      }
      else{
        this.router.navigate(['admin/admin-login']);
        return false;
      }
    }
}
