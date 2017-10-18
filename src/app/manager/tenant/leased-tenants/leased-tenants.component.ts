import {Component, ElementRef, ViewChild} from '@angular/core';
import { OnInit, ViewContainerRef  } from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {TenantService} from '../service/tenant.service';
import {LeasedTenantsDB} from '../leased-tenants/LeasedTenantsDB';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-leased-tenants',
  templateUrl: './leased-tenants.component.html',
  styleUrls: ['./leased-tenants.component.css']
})
export class LeasedTenantsComponent {
    displayedColumns = ['id','email','primary_phone'];
   

    constructor(public tenantService : TenantService){
    }
    leasedTenantsDB = new LeasedTenantsDB(this.tenantService);
    dataSource: ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
        this.dataSource = new ExampleDataSource(this.leasedTenantsDB);
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
  
    constructor(private _leasedTenantsDB: LeasedTenantsDB) {
      super();
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<TenantData[]> {
      const displayDataChanges = [
        this._leasedTenantsDB.dataChange,
        this._filterChange,
      ];
  
      return Observable.merge(...displayDataChanges).map(() => {
        return this._leasedTenantsDB.data.slice().filter((item: TenantData) => {
         // console.log('Inside Here '+item.property);
          let searchStr = (item.email).toLowerCase();
          //let searchStr = (item.property + item.color).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        });
      });
    }
  
    disconnect() {}
  }