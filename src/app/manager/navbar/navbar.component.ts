import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../service/manager.service';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-manager-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public manager_name :any;
  constructor(private router: Router,
    private managerService: ManagerService,
     public snackBar: MdSnackBar) {
      var manager = localStorage.getItem('manager');
      var parsing  = JSON.parse(manager);
      this.manager_name = parsing.name;
      }

  ngOnInit() {
  }
  onLogoutClick(){
    this.managerService.logout();
    this.router.navigate(['manager']);
    var message = 'Manager Logged Out';
    this.openSnackBar(message)
    return false;
  }
  gotoDashboard() {
    this.router.navigate(['/manager/dashboard']);
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Close', { duration: 5000});
  }

}
