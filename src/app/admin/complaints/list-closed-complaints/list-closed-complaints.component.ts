import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {AdminService} from '../../service/admin.service';
import {ComplaintsClosedListDB} from '../list-closed-complaints/ComplaintsClosedListDB';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-list-closed-complaints',
  templateUrl: './list-closed-complaints.component.html',
  styleUrls: ['./list-closed-complaints.component.css']
})
export class ListClosedComplaintsComponent{
  displayedColumns = ['id','owner','date','title'];
  
    constructor(public adminService : AdminService){
   
    }
  
  
    complaintsListDB = new ComplaintsClosedListDB(this.adminService);
   
    dataSource: ExampleDataSource | null;
  
    @ViewChild('filter') filter: ElementRef;
  
    ngOnInit() {
      this.dataSource = new ExampleDataSource(this.complaintsListDB);
      Observable.fromEvent(this.filter.nativeElement, 'keyup')
          .debounceTime(150)
          .distinctUntilChanged()
          .subscribe(() => {
            if (!this.dataSource) { return; }
            this.dataSource.filter = this.filter.nativeElement.value;
          });
    }
  }
  
  /** Constants used to fill up our data base. */
  
  
  export interface ComplaintData {
    id: string;
    owner: string;
    title:string;
    date:string;
    uniqId:string;
  }
  
  
  
  /**
   * Data source to provide what data should be rendered in the table. Note that the data source
   * `ca`n retrieve its data in any way. In this case, the data source is provided a reference
   * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
   * the underlying data. Instead, it only needs to take the data and send the table exactly what
   * should be rendered.
   */
  
   //Replace example database with Some Data from AWs
  
  
  export class ExampleDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }
  
    constructor(private complaintsListDB: ComplaintsClosedListDB) {
      super();
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<ComplaintData[]> {
      const displayDataChanges = [
        this.complaintsListDB.dataChange,
        this._filterChange,
      ];
  
      return Observable.merge(...displayDataChanges).map(() => {
        return this.complaintsListDB.data.slice().filter((item: ComplaintData) => {
         // console.log('Inside Here '+item.property);
          let searchStr = (item.owner).toLowerCase();
          //let searchStr = (item.property + item.color).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        });
      });
    }
  
    disconnect() {}
  }
  
  

