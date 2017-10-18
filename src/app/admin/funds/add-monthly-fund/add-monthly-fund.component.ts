export interface Unit {
  id: string;
  itemName: string;
}
import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {MonthlyFund} from '../monthlyfund';
import {MdSnackBar} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-add-monthly-fund',
  templateUrl: './add-monthly-fund.component.html',
  styleUrls: ['./add-monthly-fund.component.css']
})
export class AddMonthlyFundComponent  {

  owners: any;  
  units: any;  
  public years:any;
  public months:any;
  public ownerUnits:any;
  finalUnits: Unit[] = [];
  apartmentId: any;
  model = new MonthlyFund('', '', '', '', '');
  submitted = false;
  selectedItems2: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(public adminService:AdminService,
    public route:ActivatedRoute,
    public router:Router,
    public snackBar: MdSnackBar) {
      var admin = localStorage.getItem('admin');
      var parsing  = JSON.parse(admin);
      this.apartmentId = parsing.apartmentId._id;
      this.getOwners();
      this.getYears();
      this.getMonths();
      this.dropdownList = this.finalUnits;
        this.selectedItems = [
                /*   {"id":2,"itemName":"Singapore"},
                {"id":3,"itemName":"Australia"},
                {"id":4,"itemName":"Canada"},
                {"id":5,"itemName":"South Korea"} , */        
            ];
            this.dropdownSettings = { 
            singleSelection: false, 
            text:"Select Units",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:"myclass custom-class",
            searchPlaceholderText:"Search"
          };

     }
     onItemSelect(item:any){
        console.log('Selected Item');
        console.log(item);
       //console.log(this.selectedItems2);
   }
   OnItemDeSelect(item:any){
       console.log('Deselected Item');
       console.log(item);
       //console.log(this.selectedItems2);
   }
   onSelectAll(items: any){
       //console.log(items);
   }
   onDeSelectAll(items: any){
       console.log(items);
   }
   getMonths(){
      var info = {
        apartmentId: this.apartmentId
    }
      //Get all Months
     this.adminService.getMonths(info).then((data) => {
        this.months = data;
        console.log(this.months);
      }, (err) => {
      console.log(err);
    });
  }
  getYears(){
    var info = {
      apartmentId: this.apartmentId
    }
    //Get all Desingnations
    this.adminService.getYears(info).then((data) => {
        this.years = data;
        console.log(this.years);
      }, (err) => {
      console.log(err);
    });
  } 
   getOwners(){
    var aparinfo = {
      apartmentId: this.apartmentId
    }
    this.adminService.getAllUnits(aparinfo).then((data) => {
      this.units = data;

            this.units.forEach(element => {
            var output= {
                id: element._id,
                itemName: element.unit_no,
             }
             this.finalUnits.push(output); 
             });




      //console.log(JSON.stringify(this.units,null,4));
     }, (err) => {
    console.log(err);
    });
  }
  openSnackBar(message) {
    console.log('Message is '+message);
    this.snackBar.open(message, 'Close', { duration: 5000});
}
onSubmit() { 
  console.log('Form Submmited');
      var fundDetails = {
          apartmentId:this.apartmentId,
          units: this.selectedItems,
          month: this.model.month,
          year: this.model.year,
          date: moment().format('DD MMM YY, h:mm a'),
          amount: this.model.amount,
          purpose: this.model.purpose
        }
        console.log(JSON.stringify(fundDetails,null,4)); 

     
      //Here Add Code to Update that Unit Status
        this.adminService.addMonthlyFund(fundDetails).then((data) => {
          
          //If this style is ok then should add to Main Total MOnthly fund Table Amount
          
          var message = "Fund Created";
           this.openSnackBar(message);   
          }, (err) => {
             console.log(err);
     
           });   
  } 
}
