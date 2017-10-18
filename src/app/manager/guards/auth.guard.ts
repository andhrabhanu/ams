import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { ManagerService } from '../service/manager.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private managerService:ManagerService ,private router: Router ){

    }

    canActivate(){
      if(this.managerService.loggedIn()){
        return true;
      }
      else{
        this.router.navigate(['manager/manager-login']);
        return false;
      }
    }
}
