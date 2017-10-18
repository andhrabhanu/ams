

  //Model
  export interface MemberTypeData {
  id: string;
  member_type: string;
  uniqId:string;


}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MemberTypeService} from '../memberType.service';
export class MemberTypeListDB {
    public apartmentId:any;
    memberTypes: any;
  dataChange: BehaviorSubject<MemberTypeData[]> = new BehaviorSubject<MemberTypeData[]>([]);
  get data(): MemberTypeData[] { return this.dataChange.value; }

  constructor(public memberTypeService : MemberTypeService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId;

    console.log('Inside Member List Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.memberTypeService.getMemberTypes(info).then((data) => {
                    this.memberTypes = data;

                   console.log(data);
            //Run Foreach
            this.memberTypes.forEach(element => {
                //console.log(''+element.name)
                    var output= {
                        id: element._id,
                        member_type: element.member_type,
                        uniqId:element.uniqId
                       
                        }
                      //console.log(output.property);
                       this.addMemberType(output);
               
                 });
                }, (err) => {
                  console.log("not allowed "+err);
                });

    

   

    
    
    //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addMemberType(output) {
    

    
    const copiedData = this.data.slice();
    copiedData.push(this.createMemberType(output));
    this.dataChange.next(copiedData);
  } 

   private createMemberType(output) {
     //  console.log('Inside createNewUser user with Output');
   //console.log(output.property)

    return {
      id: (this.data.length + 1).toString(),
      member_type: output.member_type,
      uniqId:output.uniqId
     
    };
  } 
} 