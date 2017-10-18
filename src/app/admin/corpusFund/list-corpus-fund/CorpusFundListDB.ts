

  //Model
  export interface CorpusFundData {
  id: string;
  owner: string;
  month: string;
  year:string;
  date:string;
  amount:string;
  purpose:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class CorpusFundListDB {
  public apartmentId:any;  
    public bills: any;
  dataChange: BehaviorSubject<CorpusFundData[]> = new BehaviorSubject<CorpusFundData[]>([]);
  get data(): CorpusFundData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;
    console.log('Apartment Id is from DB '+ this.apartmentId);

    console.log('Inside CorpusList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.ListCorpusFund(info).then((data) => {
                    this.bills = data;
           //Run Foreach
            this.bills.forEach(element => {
                    var output= {
                        id: element._id,
                        owner:element.ownerId.name,
                        month: element.month.month,
                        year:element.year.year,
                        date:element.date,
                        amount:element.amount,
                        purpose:element.purpose,
                        uniqId:element.uniqId
                       
                        }
                        console.log(JSON.stringify(output,null,4));
                       this.addFund(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addFund(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewFund(output));
    this.dataChange.next(copiedData);
  } 

   private createNewFund(output) {
   //console.log('Inside create new Employee '+output.name)

    return {
      id: (this.data.length + 1).toString(),
      owner: output.owner,
      month: output.month,
      year: output.year,
      date:output.date,
      amount:output.amount,
      purpose:output.purpose,
      uniqId:output.uniqId,
    };
  } 
} 