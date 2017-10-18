//Model
  export interface ResourceData {
  id: string;
  name: string;
  mobile: string;
  uniqId:string;
  serviceCategory:string;
}
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ManagerService } from '../../service/manager.service';

export class ResourceListDB {
  managerID:any;
  public info:any; 
    
    resources: any;
  dataChange: BehaviorSubject<ResourceData[]> = new BehaviorSubject<ResourceData[]>([]);
  get data(): ResourceData[] { return this.dataChange.value; }

  constructor(public managerService: ManagerService) {

    var manager = localStorage.getItem('manager');
    //console.log('Manager UserType')
            var parsing_manager  = JSON.parse(manager);
            this.managerID = parsing_manager._id;
            console.log('Manager Id'+ this.managerID)  
            var myId = {
             managerId: this.managerID
              }
    //Get array here
      this.managerService.getServiceResources(myId).then((data) => {
                    this.resources = data;
                    console.log(this.resources);
                    var count =  Object.keys(this.resources).length;
                    console.log('Size of Array '+ Object.keys(this.resources).length);
                   if(count==0){
                    alert("No Resources");  
                    
                   }
                
            //Run Foreach
            this.resources.forEach(element => {
                
                    var output= {
                        id: element._id,
                        name: element.name,
                        mobile: element.mobile,
                        uniqId: element.uniqId,
                        serviceCategory:element.serviceCatId.name
                        }
                        console.log(output);
                       this.addResource(output);
               
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

  addResource(output) {
   const copiedData = this.data.slice();
    copiedData.push(this.createNewResource(output));
    this.dataChange.next(copiedData);
  } 

   private createNewResource(output) {
     //  console.log('Inside createNewUser user with Output');
  // console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      name: output.name,
      mobile: output.mobile,
      uniqId:output.uniqId,
      serviceCategory:output.serviceCategory,
      
    };
  } 
} 