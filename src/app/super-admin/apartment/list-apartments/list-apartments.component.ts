import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ApartmentService} from '../apartment.service';
import {ApartmentListDB} from '../list-apartments/ApartmentListDB';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
@Component({
  selector: 'app-list-apartments',
  templateUrl: './list-apartments.component.html',
  styleUrls: ['./list-apartments.component.css']
})
export class ListApartmentsComponent {
  displayedColumns = ['id','name','city'];
  
    constructor(public apartmentService : ApartmentService){
   
    }
  
  
    apartmentsListDB = new ApartmentListDB(this.apartmentService);
   
    dataSource: ExampleDataSource | null;
  
    @ViewChild('filter') filter: ElementRef;
  
    ngOnInit() {
      this.dataSource = new ExampleDataSource(this.apartmentsListDB);
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
  
  
  export interface ApartmentData {
    id: string;
    name: string;
    uniqId:string;
    city:string;
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
  
    constructor(private apartmentListDB: ApartmentListDB) {
      super();
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<ApartmentData[]> {
      const displayDataChanges = [
        this.apartmentListDB.dataChange,
        this._filterChange,
      ];
  
      return Observable.merge(...displayDataChanges).map(() => {
        return this.apartmentListDB.data.slice().filter((item: ApartmentData) => {
         // console.log('Inside Here '+item.property);
          let searchStr = (item.name).toLowerCase();
          //let searchStr = (item.property + item.color).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        });
      });
    }
  
    disconnect() {}
  }
  
  
