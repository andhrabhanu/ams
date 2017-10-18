

  //Model
  export interface CityData {
  id: string;
  city: string;
  uniqId:string;


}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SuperAdminService} from '../../service/super-admin.service';
export class CityListDB {
    
    cities: any;
  dataChange: BehaviorSubject<CityData[]> = new BehaviorSubject<CityData[]>([]);
  get data(): CityData[] { return this.dataChange.value; }

  constructor(public superAdminService: SuperAdminService) {

    console.log('Inside CityList Db');

    //Get array here
     this.superAdminService.getCities().then((data) => {
                    this.cities = data;

                   //console.log(data);
            //Run Foreach
            this.cities.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        city: element.city,
                        uniqId:element.uniqId
                       
                        }
                      //console.log(output.property);
                       this.addCity(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

    

   

    
    
    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addCity(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewCity(output));
    this.dataChange.next(copiedData);
  } 

   private createNewCity(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      city: output.city,
      uniqId:output.uniqId
     
    };
  } 
} 