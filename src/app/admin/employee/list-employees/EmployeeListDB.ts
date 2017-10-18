

  //Model
  export interface EmployeeData {
  id: string;
  name: string;
  email:string;
  designation:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class EmployeeListDB {
  public apartmentId:any;  
    public employees: any;
  dataChange: BehaviorSubject<EmployeeData[]> = new BehaviorSubject<EmployeeData[]>([]);
  get data(): EmployeeData[] { return this.dataChange.value; }

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
     this.adminService.getEmployees(info).then((data) => {
                    this.employees = data;
           //Run Foreach
            this.employees.forEach(element => {
                    var output= {
                        id: element._id,
                        name: element.name,
                        email:element.email,
                        designation:element.designation.member_type,
                        uniqId:element.uniqId
                       
                        }
                        console.log(JSON.stringify(output,null,4));
                       this.addEmployee(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addEmployee(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewEmployee(output));
    this.dataChange.next(copiedData);
  } 

   private createNewEmployee(output) {
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