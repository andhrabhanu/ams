

  //Model
  export interface MaintenanceData {
  id: string;
  title: string;
  date:string;
  amount:string;
  details:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class MaintenanceListDB {
  public apartmentId:any;  
    public bills: any;
  dataChange: BehaviorSubject<MaintenanceData[]> = new BehaviorSubject<MaintenanceData[]>([]);
  get data(): MaintenanceData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;
    console.log('Apartment Id is from DB '+ this.apartmentId);

    console.log('Inside BillList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getMaintenances(info).then((data) => {
                    this.bills = data;
           //Run Foreach
            this.bills.forEach(element => {
                    var output= {
                        id: element._id,
                        title:element.title,
                        date:element.date,
                        amount:element.amount,
                        details:element.details,
                        uniqId:element.uniqId
                       
                        }
                        console.log(JSON.stringify(output,null,4));
                       this.addMaintenance(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addMaintenance(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewMaintenance(output));
    this.dataChange.next(copiedData);
  } 

   private createNewMaintenance(output) {
   //console.log('Inside create new Employee '+output.name)

    return {
      id: (this.data.length + 1).toString(),
      title:output.title,
      date:output.date,
      amount:output.amount,
      details:output.details,
      uniqId:output.uniqId,
    };
  } 
} 