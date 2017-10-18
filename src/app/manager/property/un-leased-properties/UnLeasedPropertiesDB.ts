
  //Model
  export interface PropertyData {
  id: string;
  property: string;
  description: string;
  tenant: string;
  rent: string;
  uniqId:string;
  size:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {PropertyService} from '../service/property.service';
export class UnLeasedPropertiesDB {
  managerID:any;
  public info:any;
    properties: any;
  dataChange: BehaviorSubject<PropertyData[]> = new BehaviorSubject<PropertyData[]>([]);
  get data(): PropertyData[] { return this.dataChange.value; }

  constructor(public propertyService: PropertyService) {

    console.log('Inside UnLeased Db');
    var manager = localStorage.getItem('manager');
    console.log('Manager UserType')
            var parsing_manager  = JSON.parse(manager);
            
            this.managerID = parsing_manager._id;
            console.log('Manager Id'+ this.managerID)  

           var myId = {
             managerId: this.managerID
           }

    //Get array here
     this.propertyService.UnleasedPropsByManager(myId).then((data) => {
                    this.properties = data;
                    var count =  Object.keys(this.properties).length;
                    console.log('Size of Array '+ Object.keys(this.properties).length);
                   if(count==0){
                    alert("No Manager UnLeased Properties");  
                    
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
                        rent: element.name,
                        uniqId:element.uniqId,
                        rate:element.rate,
                        size:element.size
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
      rent: output.rate,
      size:output.size,
      uniqId:output.uniqId
    };
  } 
} 