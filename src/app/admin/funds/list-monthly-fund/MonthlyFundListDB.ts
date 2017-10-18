

  //Model
  export interface MonthFundData {
  id: string;
  month: string;
  year:string;
  date:string;
  amount:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class MonthlyFundListDB {
  public apartmentId:any;  
    public monthlyFunds: any;
  dataChange: BehaviorSubject<MonthFundData[]> = new BehaviorSubject<MonthFundData[]>([]);
  get data(): MonthFundData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;
    console.log('Apartment Id is from DB '+ this.apartmentId);

    console.log('Inside MonthlyFunds Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getMonthlyFunds(info).then((data) => {
                    this.monthlyFunds = data;
           //Run Foreach
            this.monthlyFunds.forEach(element => {
                    var output= {
                        id: element._id,
                        month: element.month.month,
                        year:element.year.year,
                        date:element.date,
                        amount:element.amount,
                        uniqId:element.uniqId
                       
                        }
                        console.log(JSON.stringify(output,null,4));
                       this.addMonthlyFund(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addMonthlyFund(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewMonthlyFund(output));
    this.dataChange.next(copiedData);
  } 

   private createNewMonthlyFund(output) {
   //console.log('Inside create new Employee '+output.name)

    return {
      id: (this.data.length + 1).toString(),
      month: output.month,
      year: output.year,
      date:output.date,
      amount:output.amount,
      uniqId:output.uniqId,
    };
  } 
} 