import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
//import {AllServices} from '../service/all-services';
import { ManagerService } from '../../service/manager.service';
import { ResourceListDB} from '../resource-list/ResourceListDB';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent'
@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {
  public dataInfo:any;public myName:any;
  
    public info:any;
    displayedColumns = ['id','name','mobile','serviceCategory'];
    
      constructor(public managerService : ManagerService){
   
      }
    
    
      resourcesListDB = new ResourceListDB(this.managerService);
      
   
      
      
      dataSource: ExampleDataSource | null;
    
      @ViewChild('filter') filter: ElementRef;
    
      ngOnInit() {
        //console.log('Before ExampleDataSource');
      
        this.dataSource = new ExampleDataSource(this.resourcesListDB);
       
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
    
    
    export interface ResourceData {
      id: string;
      name: string;
      mobile: string;
      uniqId:string;  serviceCategory:string;
      
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
    
      constructor(private resourceListDB: ResourceListDB) {
        
        super();
        
        
        //_leasedPropertiesDB.rowsCount();
  
  
      }
    
      /** Connect function called by the table to retrieve one stream containing the data to render. */
      connect(): Observable<ResourceData[]> {
        const displayDataChanges = [
          this.resourceListDB.dataChange,
          this._filterChange,
        ];
    
        return Observable.merge(...displayDataChanges).map(() => {
          return this.resourceListDB.data.slice().filter((item: ResourceData) => {
           // console.log('Inside Here '+item.property);
            let searchStr = (item.name).toLowerCase();
            //let searchStr = (item.property + item.color).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) != -1;
          });
        });
      }
    
      disconnect() {}
    }
    
    
  
