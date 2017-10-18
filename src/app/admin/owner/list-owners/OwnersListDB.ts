

  //Model
  export interface OwnerData {
  id: string;
  name: string;
  email: string;
  unit_no:string;

}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class OwnersListDB {
    public unitnames='Units are ';
    owners: any; public apartmentId:any;
  dataChange: BehaviorSubject<OwnerData[]> = new BehaviorSubject<OwnerData[]>([]);
  get data(): OwnerData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
 

    console.log('Inside Owners Db');

    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId;

    //Get array here
    var info = {
      apartmentId: this.apartmentId
    }
     this.adminService.getOwners(info).then((data) => {
                    this.owners = data;
                    var name ='Floors are';
                    var finalUNits;
                    this.owners.forEach(element => {

                      // var units_list = element.unit_no;
              

                      /* units_list.forEach(function (value, i) {
                       console.log('%d: %s', i, value.itemName);


                      }); */
    
                    var output = {
                        id: element._id,
                        name: element.name,
                        email: element.email,
                        unit_no : element.unit_no
                      }
                      console.log(JSON.stringify(output,null,4));
                       this.addOwner(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

    

   

    
    
    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addOwner(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewOwner(output));
    this.dataChange.next(copiedData);
  } 

   private createNewOwner(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      name: output.name,
      email:output.email,
      unit_no:output.unit_no
     
    };
  } 
} 