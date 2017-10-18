import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule,FormControl, FormGroup,FormsModule }    from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AdminModule } from '../admin/admin.module';
import { ManagerComponent }  from './manager.component';
import { ManagerRoutingModule }  from './manager-routing.module';
import { FileUploader,FileDropDirective } from 'ng2-file-upload';

//Services
import { ManagerService } from './service/manager.service';
import { PropertyService } from './property/service/property.service';
import { TenantService } from './tenant/service/tenant.service';
import { RequestService } from './servicerequest/service/request.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CdkTableModule } from '@angular/cdk';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

//Property
import { LeasedPropertiesComponent } from './property/leased-properties/leased-properties.component';
import { ViewPropertyComponent } from './property/view-property/view-property.component';
import { ImageGalleryComponent } from './property/image-gallery/image-gallery.component';
import { MultiImageUploadComponent } from './property/multi-image-upload/multi-image-upload.component';
import { UnLeasedPropertiesComponent } from './property/un-leased-properties/un-leased-properties.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { EditPropertyComponent } from './property/edit-property/edit-property.component';
import { LeasePropertyComponent } from './property/lease-property/lease-property.component';
import { PropertyLeasesComponent } from './property/property-leases/property-leases.component';
import { ImageUploadComponent } from './property/image-upload/image-upload.component';

//Tenant
import { AddTenantComponent } from './tenant/add-tenant/add-tenant.component';
import { LeasedTenantsComponent } from './tenant/leased-tenants/leased-tenants.component';
import { UnLeasedTenantsComponent } from './tenant/un-leased-tenants/un-leased-tenants.component';
import { ViewTenantComponent } from './tenant/view-tenant/view-tenant.component';

//Service Requests
import { AddRequestComponent } from './servicerequest/add-request/add-request.component';
import { ClosedRequestsComponent } from './servicerequest/closed-requests/closed-requests.component';
import { OpenRequestsComponent } from './servicerequest/open-requests/open-requests.component';
import { ViewRequestComponent } from './servicerequest/view-request/view-request.component';
import { EditRequestComponent } from './servicerequest/edit-request/edit-request.component';
import { AddServiceResourceComponent } from './service-resource/add-service-resource/add-service-resource.component';
import { ResourceListComponent } from './service-resource/resource-list/resource-list.component';
import { ViewResourceComponent } from './service-resource/view-resource/view-resource.component';
import { ViewLeaseComponent } from './property/view-lease/view-lease.component';
import { AssignRequestComponent } from './servicerequest/assign-request/assign-request.component';
@NgModule({
  imports: [
    AdminModule,     
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
    ManagerRoutingModule,
    FlashMessagesModule
 
  ], 
    declarations: [
   
        
       
        ManagerComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        NavbarComponent,
        LeasedPropertiesComponent,
        ViewPropertyComponent,
        ImageGalleryComponent,
        MultiImageUploadComponent,
        UnLeasedPropertiesComponent,
        AddPropertyComponent,
        EditPropertyComponent,
        LeasePropertyComponent,
        PropertyLeasesComponent,
        ImageUploadComponent,

        AddTenantComponent,
        LeasedTenantsComponent,
        UnLeasedTenantsComponent,
        ViewTenantComponent,

        AddRequestComponent,
        ClosedRequestsComponent,
        OpenRequestsComponent,
        ViewRequestComponent,
        EditRequestComponent,
        AddServiceResourceComponent,
        ResourceListComponent,
        ViewResourceComponent,
        ViewLeaseComponent,
        AssignRequestComponent
      ],
  providers: [ManagerService,PropertyService,TenantService,RequestService]
})
export class ManagerModule { }
