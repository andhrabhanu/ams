

  //Model
  export interface TenantData {
  id: string;
  email: string;
  primary_phone: string;
  uniqId:string; 
 
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TenantService} from '../service/tenant.service';
export class LeasedTenantsDB {
    
    tenants: any;managerID:any;
  dataChange: BehaviorSubject<TenantData[]> = new BehaviorSubject<TenantData[]>([]);
  get data(): TenantData[] { return this.dataChange.value; }

  constructor(public tenantService: TenantService) {

    console.log('Inside Leased Db Db');
    
    var manager = localStorage.getItem('manager');
    console.log('Manager UserType')
    var parsing_manager  = JSON.parse(manager);
    
    this.managerID = parsing_manager._id;
    console.log('Manager Id'+ this.managerID) 
    var info ={
      managerId: this.managerID
    }
    //Get array here
     this.tenantService.getLeasedTenants(info).then((data) => {
                    this.tenants = data;
                    var count =  Object.keys(this.tenants).length;
                    console.log('Size of Array '+ Object.keys(this.tenants).length);
                   if(count==0){
                    alert("No Leased Tenants");  
                    }
                   //console.log(data);
            //Run Foreach
            this.tenants.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        email: element.email,
                        primary_phone: element.primary_phone,
                        uniqId:element.uniqId
                        }
                      
                       this.addTenant(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

    

   

    
    
    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addTenant(output) {
    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewTenant(output));
    this.dataChange.next(copiedData);
    console.log(copiedData);
    
  } 

   private createNewTenant(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)
   console.log('Printing SML '+JSON.stringify(output));
    return {
      id: (this.data.length + 1).toString(),
      email: output.email,
      primary_phone: output.primary_phone,
      uniqId: output.uniqId
     
    };
  } 
} 