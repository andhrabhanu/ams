import {Component, ElementRef, ViewChild} from '@angular/core';
import { OnInit, ViewContainerRef  } from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
//import {AllServices} from '../service/all-services';
import {TenantService} from '../service/tenant.service';
import {UnLeasedTenantsDB} from '../un-leased-tenants/UnLeasedTenantsDB';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-unleased-tenants',
  templateUrl: './un-leased-tenants.component.html',
  styleUrls: ['./un-leased-tenants.component.css']
})
export class UnLeasedTenantsComponent {
    displayedColumns = ['id','email','primary_phone'];
   

    constructor(public tenantService : TenantService){
    }
    unleasedTenantsDB = new UnLeasedTenantsDB(this.tenantService);
    dataSource: ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
        this.dataSource = new ExampleDataSource(this.unleasedTenantsDB);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }
  
 }


 export interface TenantData {
    id: string;
    email: string;
    primary_phone: string;
    uniqId:string;
   }

export class ExampleDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }
  
    constructor(private _unleasedTenantsDB: UnLeasedTenantsDB) {
      super();
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<TenantData[]> {
      const displayDataChanges = [
        this._unleasedTenantsDB.dataChange,
        this._filterChange,
      ];
  
      return Observable.merge(...displayDataChanges).map(() => {
        return this._unleasedTenantsDB.data.slice().filter((item: TenantData) => {
         // console.log('Inside Here '+item.property);
          let searchStr = (item.email).toLowerCase();
          //let searchStr = (item.property + item.color).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        });
      });
    }
  
    disconnect() {}
  }