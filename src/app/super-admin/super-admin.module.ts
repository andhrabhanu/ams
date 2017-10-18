import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule,FormControl, FormGroup,FormsModule }    from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
//import { FileUploader,FileDropDirective } from 'ng2-file-upload';
//import { FileSelectDirective } from 'ng2-file-upload';

import { SuperAdminComponent }  from './super-admin.component';
import {SuperAdminRoutingModule  }  from './super-admin-routing.module';
import { SuperAdminService } from './service/super-admin.service';
import { ApartmentService } from './apartment/apartment.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CdkTableModule} from '@angular/cdk';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Admin
import { AddAdminComponent } from './admin/add-admin/add-admin.component';



//Apartment
import { AddApartmentComponent } from './apartment/add-apartment/add-apartment.component';
import { ViewApartmentComponent } from './apartment/view-apartment/view-apartment.component';
import { ListApartmentsComponent } from './apartment/list-apartments/list-apartments.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { ListCitiesComponent } from './cities/list-cities/list-cities.component';


@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    CdkTableModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    FormsModule,
    SuperAdminRoutingModule,
    FlashMessagesModule
 
  ], 
 
  declarations: [
     
      SuperAdminComponent,
      LoginComponent,
      RegisterComponent,
      NavbarComponent,
      DashboardComponent,
      AddAdminComponent,
      AddApartmentComponent,
      ViewApartmentComponent,
      ListApartmentsComponent,
      AddCityComponent,
      ListCitiesComponent,
      ],
  providers: [SuperAdminService,ApartmentService]
})
export class SuperAdminModule { }
