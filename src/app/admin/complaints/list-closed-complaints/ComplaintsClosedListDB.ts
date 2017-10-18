

  //Model
  export interface ComplaintData {
  id: string;
  owner: string;
  title:string;
  date:string;
  uniqId:string;
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AdminService} from '../../service/admin.service';
export class ComplaintsClosedListDB {
  public apartmentId:any;  
    public complaints: any;
    public units:any;
  dataChange: BehaviorSubject<ComplaintData[]> = new BehaviorSubject<ComplaintData[]>([]);
  get data(): ComplaintData[] { return this.dataChange.value; }

  constructor(public adminService: AdminService) {
    var admin = localStorage.getItem('admin');
    var parsing  = JSON.parse(admin);
    this.apartmentId = parsing.apartmentId._id;
    console.log('Apartment Id is from DB '+ this.apartmentId);

    console.log('Inside ComplaintList Db');
    var info = {
      apartmentId: this.apartmentId
    }
    //Get array here
     this.adminService.getClosedComplaints(info).then((data) => {
                    this.complaints = data;
                    //console.log(JSON.stringify(this.complaints,null,4));

                  



           //Run Foreach
            this.complaints.forEach(element => {
                 var output= {
                        id: element._id,
                        owner:element.ownerId.name,
                        date:element.date,
                        title:element.title,
                        uniqId:element.uniqId,
                       
                        }
                      //  console.log(JSON.stringify(output,null,4));
                       this.addComplaint(output);
                  });
                }, (err) => {
                  console.log("not allowed "+err);
                });

  //Calling Add User 100 Times
    /* for (let i = 0; i < 100; i++) {
         this.addUser();
    } */
    
    
  }
 
  addComplaint(output) {
    

    //This will call 100 times createNew User
    //console.log('Inside Add user with Output');
    const copiedData = this.data.slice();
    copiedData.push(this.createNewComplaint(output));
    this.dataChange.next(copiedData);
  } 

   private createNewComplaint(output) {
   //console.log('Inside create new Employee '+output.name)

    return {
      id: (this.data.length + 1).toString(),
      owner: output.owner,
      title: output.title,
      date:output.date,
      uniqId:output.uniqId,
    };
  } 
} 