import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SuperAdminService} from '../service/super-admin.service';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router,
    private adminService:SuperAdminService,
    public snackBar: MdSnackBar) {

    }

    openSnackBar(message) {
      this.snackBar.open(message, 'Close', { duration: 5000});
    }


 

}
