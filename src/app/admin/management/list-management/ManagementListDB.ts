

  //Model
  export interface ManagementData {
  id: string;
  name: string;
  email:string;
  designation:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class ManagementListDB {
  public apartmentId:any;  
    public managements: any;
  dataChange: BehaviorSubject<ManagementData[]> = new BehaviorSubject<ManagementData[]>([]);
  get data(): ManagementData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;
    console.log('Apartment Id is from DB '+ this.apartmentId);

    console.log('Inside UnitList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getAllManagement(info).then((data) => {
                    this.managements = data;
           //Run Foreach
            this.managements.forEach(element => {
                    var output= {
                        id: element._id,
                        name: element.name,
                        email:element.email,
                        designation:element.designation.member_type,
                        uniqId:element.uniqId
                       
                        }
                        console.log(JSON.stringify(output,null,4));
                       this.addManagement(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addManagement(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewManagement(output));
    this.dataChange.next(copiedData);
  } 

   private createNewManagement(output) {
   //console.log('Inside create new Employee '+output.name)

    return {
      id: (this.data.length + 1).toString(),
      name: output.name,
      email:output.email,
      designation:output.designation,
      uniqId:output.uniqId
      
     
    };
  } 
} 