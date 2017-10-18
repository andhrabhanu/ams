

  //Model
  export interface UnitData {
  id: string;
  floor_no: string;
  uniqId:string;
  unit_no:string;


}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UnitService} from '../unit.service';
export class UnitListDB {
  public apartmentId:any;  
    units: any;
  dataChange: BehaviorSubject<UnitData[]> = new BehaviorSubject<UnitData[]>([]);
  get data(): UnitData[] { return this.dataChange.value; }

  constructor(public unitService: UnitService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;

    console.log('Inside UnitList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.unitService.getUnits(info).then((data) => {
                    this.units = data;
           //Run Foreach
            this.units.forEach(element => {
                    var output= {
                        id: element._id,
                        floor_no: element.floor_no,
                        uniqId:element.uniqId,
                        unit_no:element.unit_no
                       
                        }
                        console.log(JSON.stringify(output,null,4));
                       this.addUnit(output);
                       
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addUnit(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUnit(output));
    this.dataChange.next(copiedData);
  } 

   private createNewUnit(output) {
   console.log('Inside create new Unit '+output.floor_no)

    return {
      id: (this.data.length + 1).toString(),
      floor_no: output.floor_no,
      uniqId:output.uniqId,
      unit_no:output.unit_no,
      
     
    };
  } 
} 