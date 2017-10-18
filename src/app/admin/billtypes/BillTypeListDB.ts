

  //Model
  export interface BillTypeData {
  id: string;
  billType: string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../admin/service/admin.service';
export class BillTypeListDB {
     apartmentId:any;
    billTypes: any;
  dataChange: BehaviorSubject<BillTypeData[]> = new BehaviorSubject<BillTypeData[]>([]);
  get data(): BillTypeData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;

    console.log('Inside BillTypeList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getBillTypes(info).then((data) => {
                    this.billTypes = data;

                   console.log(data);
            //Run Foreach
            this.billTypes.forEach(element => {
                
                    var output= {
                        id: element._id,
                        billType: element.billType,
                        uniqId:element.uniqId
                       
                        }
                    
                       this.addBillType(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });


    
  }
 
  addBillType(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createBillType(output));
    this.dataChange.next(copiedData);
  } 

   private createBillType(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      billType: output.billType,
      uniqId:output.uniqId
    };
  } 
} 