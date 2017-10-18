

  //Model
  export interface BillData {
  id: string;
  billType: string;
  billDate: string;
  billMonth:string;
  billYear:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class BillListDB {
  public apartmentId:any;  
    public bills: any;
  dataChange: BehaviorSubject<BillData[]> = new BehaviorSubject<BillData[]>([]);
  get data(): BillData[] { return this.dataChange.value; }

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
     this.adminService.getBills(info).then((data) => {
                    this.bills = data;
           //Run Foreach
            this.bills.forEach(element => {
                    var output= {
                        id: element._id,
                        uniqId:element.uniqId,
                        billType: element.billType.billType,
                        billDate:element.billDate,
                        billMonth:element.billMonth.month,
                        billYear:element.billYear.year
                       
                        }
                        console.log(JSON.stringify(output,null,4));
                       this.addBill(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addBill(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewBill(output));
    this.dataChange.next(copiedData);
  } 

   private createNewBill(output) {
   //console.log('Inside create new Employee '+output.name)

    return {
      id: (this.data.length + 1).toString(),
      uniqId:output.uniqId,
      billType: output.billType,
      billDate:output.billDate,
      billMonth:output.billMonth,
      billYear:output.billYear,
    };
  } 
} 