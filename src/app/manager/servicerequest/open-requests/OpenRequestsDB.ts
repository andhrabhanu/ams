

  //Model
  export interface RequestData {
  id: string;
  propertyId: string;
  requestTitle: string;
  requestPriority: string;
  uniqueId: string;
  requestUniqueId: string;
 }

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {RequestService} from '../service/request.service';
export class OpenRequestsDB {
    
    serviceRequests: any;
  dataChange: BehaviorSubject<RequestData[]> = new BehaviorSubject<RequestData[]>([]);
  get data(): RequestData[] { return this.dataChange.value; }

  constructor(public requestService: RequestService) {

    console.log('Inside Leased Db Db');

    //Get array here
     this.requestService.getOpenRequests().then((data) => {
                    this.serviceRequests = data;

                   console.log(this.serviceRequests);
            //Run Foreach
            this.serviceRequests.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        propertyId: element.propertyId.name,
                        uniqueId:element.propertyId.uniqId,
                        requestTitle: element.requestTitle,
                        requestPriority: element.requestPriority,
                        requestUniqueId: element.uniqId,
                        }

                        console.log(JSON.stringify(output,null,4));
                      
                       this.addServiceRequest(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addServiceRequest(output) {
    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createServiceRequest(output));
    this.dataChange.next(copiedData);
    console.log(copiedData);
    
  } 

   private createServiceRequest(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)
   console.log('Printing SML '+JSON.stringify(output));
    return {
      id: (this.data.length + 1).toString(),
      propertyId: output.propertyId,
      uniqueId: output.uniqueId,
      requestTitle: output.requestTitle,
      requestPriority: output.requestPriority,
      requestUniqueId: output.requestUniqueId

     };
  } 
} 