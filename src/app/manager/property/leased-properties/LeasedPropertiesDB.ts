


  //Model
  export interface PropertyData {
  id: string;
  property: string;
  description: string;
  tenant: string;
  rent: string;
  uniqId:string;
}
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {PropertyService} from '../service/property.service';

export class LeasedPropertiesDB {
  managerID:any;
  public info:any; 
    
    properties: any;
  dataChange: BehaviorSubject<PropertyData[]> = new BehaviorSubject<PropertyData[]>([]);
  get data(): PropertyData[] { return this.dataChange.value; }

  constructor(public propertyService: PropertyService) {

    var manager = localStorage.getItem('manager');
    //console.log('Manager UserType')
            var parsing_manager  = JSON.parse(manager);
            
            this.managerID = parsing_manager._id;
           // console.log('Manager Id'+ this.managerID)  

    //console.log('Inside Leased Db Db');
           var myId = {
             managerId: this.managerID
           }
    //Get array here
      this.propertyService.leasedPropsByManager(myId).then((data) => {
                    this.properties = data;
                    var count =  Object.keys(this.properties).length;
                    console.log('Size of Array '+ Object.keys(this.properties).length);
                   if(count==0){
                    alert("No Manager Leased Properties");  
                    
                   }
                   //console.log(data);
            //Run Foreach
            this.properties.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        property: element.name,
                        description: element.description,
                        tenant: element._id,
                        rent: element.rate,
                        uniqId:element.uniqId
                        }
                      //console.log(output.property);
                       this.addProperty(output);
               
                 });
          }, (err) => {
                  console.log("not allowed "+err);
                });

    

   

    
    
    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  public rowsCount(){
     console.log('Inside Rows Count');
     return true;
  }

  addProperty(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewProperty(output));
    this.dataChange.next(copiedData);
  } 

   private createNewProperty(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      property: output.property,
      description:output.description,
      tenant: 'Bhanu',
      rent: output.rent,
      uniqId:output.uniqId
    };
  } 
} 