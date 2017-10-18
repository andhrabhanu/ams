

  //Model
  export interface SalaryData {
  id: string;
  name: string;
  designation: string;
  month:string;
  amount:string;
  date:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class SalaryListDB {
  public apartmentId:any;  
    public salaries: any;
  dataChange: BehaviorSubject<SalaryData[]> = new BehaviorSubject<SalaryData[]>([]);
  get data(): SalaryData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;
    console.log('Apartment Id is from DB '+ this.apartmentId);

    console.log('Inside SalaryList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getEmployeeSalaries(info).then((data) => {
                    this.salaries = data;
           //Run Foreach
            this.salaries.forEach(element => {
                    var output= {
                        id: element._id,
                        name: element.name.name,
                        designation: element.designation.member_type,
                        month: element.month.month,
                        amount: element.amount,
                        date: element.date,
                        uniqId:element.uniqId
                      }
                        console.log(JSON.stringify(output,null,4));
                       this.addSalary(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addSalary(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewSalary(output));
    this.dataChange.next(copiedData);
  } 

   private createNewSalary(output) {
   //console.log('Inside create new Employee '+output.name)

    return {
      id: (this.data.length + 1).toString(),
      name: output.name,
      designation: output.designation,
      month: output.month,
      amount: output.amount,
      date: output.date,
      uniqId:output.uniqId
    };
  } 
} 