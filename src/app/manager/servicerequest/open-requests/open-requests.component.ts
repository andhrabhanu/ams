import {Component, ElementRef, ViewChild} from '@angular/core';
import { OnInit, ViewContainerRef  } from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {RequestService} from '../service/request.service';
import {OpenRequestsDB} from '../open-requests/OpenRequestsDB';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-open-requests',
  templateUrl: './open-requests.component.html',
  styleUrls: ['./open-requests.component.css']
})
export class OpenRequestsComponent implements OnInit {
  displayedColumns = ['id','propertyId','requestTitle','requestPriority'];
  
  constructor(public requestService : RequestService) {
  }
  openRequestsDB = new OpenRequestsDB(this.requestService);
  dataSource: ExampleDataSource | null;

@ViewChild('filter') filter: ElementRef;

ngOnInit() {
      this.dataSource = new ExampleDataSource(this.openRequestsDB);
      Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
}

}


export interface RequestData {
  id: string;
  propertyId: string;
  requestTitle: string;
  requestPriority: string;
  uniqueId: string;
  requestUniqueId: string;
 }

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private openRequestsDB: OpenRequestsDB) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<RequestData[]> {
    const displayDataChanges = [
      this.openRequestsDB.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.openRequestsDB.data.slice().filter((item: RequestData) => {
       // console.log('Inside Here '+item.property);
        let searchStr = (item.requestTitle).toLowerCase();
        //let searchStr = (item.property + item.color).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}
