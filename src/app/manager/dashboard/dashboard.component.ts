import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public manager_name :any;
  constructor() {
    var manager = localStorage.getItem('manager');
    var parsing  = JSON.parse(manager);
    this.manager_name = parsing.name;
    
    
   }

  ngOnInit() {
   
   
    
  }

}
