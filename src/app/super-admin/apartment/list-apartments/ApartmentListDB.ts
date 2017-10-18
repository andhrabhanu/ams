

  //Model
  export interface ApartmentData {
  id: string;
  name: string;
  city: string;
  uniqId:string;


}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ApartmentService} from '../apartment.service';
export class ApartmentListDB {
    
    apartments: any;
  dataChange: BehaviorSubject<ApartmentData[]> = new BehaviorSubject<ApartmentData[]>([]);
  get data(): ApartmentData[] { return this.dataChange.value; }

  constructor(public apartmentService: ApartmentService) {

    console.log('Inside ApartmentList Db');

    //Get array here
     this.apartmentService.getApartments().then((data) => {
                    this.apartments = data;

                   //console.log(data);
            //Run Foreach
            this.apartments.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        name: element.name,
                        uniqId:element.uniqId,
                        city: element.cityId.city
                       
                        }
                      //console.log(output.property);
                       this.addApartment(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

    

   

    
    
    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addApartment(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewApartment(output));
    this.dataChange.next(copiedData);
  } 

   private createNewApartment(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      name: output.name,
      uniqId:output.uniqId,
      city:output.city
     
    };
  } 
} 