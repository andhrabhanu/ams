

  //Model
  export interface FloorData {
  id: string;
  floor_no: string;
  uniqId:string;


}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {FloorService} from '../floor.service';
export class FloorListDB {
    public apartmentId:any;
    floors: any;
  dataChange: BehaviorSubject<FloorData[]> = new BehaviorSubject<FloorData[]>([]);
  get data(): FloorData[] { return this.dataChange.value; }

  constructor(public floorService: FloorService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;

    console.log('Inside FloorList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.floorService.getFloors(info).then((data) => {
                    this.floors = data;

                   //console.log(data);
            //Run Foreach
            this.floors.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        floor_no: element.floor_no,
                        uniqId:element.uniqId
                       
                        }
                      //console.log(output.property);
                       this.addFloor(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

    

   

    
    
    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addFloor(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewFloor(output));
    this.dataChange.next(copiedData);
  } 

   private createNewFloor(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      floor_no: output.floor_no,
      uniqId:output.uniqId
     
    };
  } 
} 