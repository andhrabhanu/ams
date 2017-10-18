

  //Model
  export interface YearData {
  id: string;
  year: string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class YearListDB {
     apartmentId:any;
    years: any;
  dataChange: BehaviorSubject<YearData[]> = new BehaviorSubject<YearData[]>([]);
  get data(): YearData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;

    console.log('Inside YearList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getYears(info).then((data) => {
                    this.years = data;

                   //console.log(data);
            //Run Foreach
            this.years.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        year: element.year,
                        uniqId:element.uniqId
                       
                        }
                      //console.log(output.property);
                       this.addYear(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });


    
  }
 
  addYear(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewYear(output));
    this.dataChange.next(copiedData);
  } 

   private createNewYear(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      year: output.year,
      uniqId:output.uniqId
     
    };
  } 
} 