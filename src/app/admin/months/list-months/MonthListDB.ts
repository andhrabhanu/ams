

  //Model
  export interface MonthData {
  id: string;
  month: string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class MonthListDB {
     apartmentId:any;
    months: any;
  dataChange: BehaviorSubject<MonthData[]> = new BehaviorSubject<MonthData[]>([]);
  get data(): MonthData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;

    console.log('Inside MonthList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getMonths(info).then((data) => {
                    this.months = data;

                   console.log(data);
            //Run Foreach
            this.months.forEach(element => {
                
                    var output= {
                        id: element._id,
                        month: element.month,
                        uniqId:element.uniqId
                       
                        }
                    
                       this.addMonth(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });


    
  }
 
  addMonth(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createMonth(output));
    this.dataChange.next(copiedData);
  } 

   private createMonth(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      month: output.month,
      uniqId:output.uniqId
     
    };
  } 
} 