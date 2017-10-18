import { Component, OnInit } from '@angular/core';

import { HomeService } from '../service/home.service';
import { Home } from '../home';

@Component({
  templateUrl: './dashboard.list.component.html' 
}) 
export class DashboardListComponent implements OnInit { 
  countries: Promise<Home[]>;
  constructor(private homeService: HomeService) {}
  ngOnInit() {
   // this.countries = this.countryService.getCountries();
  }	
}
    