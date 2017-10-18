import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule,FormControl, FormGroup,FormsModule }    from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FileUploader,FileDropDirective } from 'ng2-file-upload';
import { FileSelectDirective } from 'ng2-file-upload';



import { AdminComponent }  from './admin.component';
import { AdminRoutingModule }  from './admin-routing.module';

import { AdminService } from './service/admin.service';
import { AuthGuard } from './guards/auth.guard';
import { FloorService } from './floors/floor.service';
import { UnitService } from './units/unit.service';
import { ApartmentService } from './apartment/apartment.service';
import { MemberTypeService } from './membertype/memberType.service';

import { IndianCurrency } from './indianCurrency.pipe';

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
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';






import { ListOwnersComponent } from './owner/list-owners/list-owners.component';
import { AddFloorComponent } from './floors/add-floor/add-floor.component';
import { ListFloorsComponent } from './floors/list-floors/list-floors.component';
import { ViewFloorComponent } from './floors/view-floor/view-floor.component';
import { AddUnitComponent } from './units/add-unit/add-unit.component';
import { ListUnitsComponent } from './units/list-units/list-units.component';
import { ViewUnitComponent } from './units/view-unit/view-unit.component';
import { AddApartmentComponent } from './apartment/add-apartment/add-apartment.component';
import { ViewApartmentComponent } from './apartment/view-apartment/view-apartment.component';
import { AddMemberTypeComponent } from './membertype/add-member-type/add-member-type.component';
import { MemberTypeListComponent } from './membertype/member-type-list/member-type-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { AddYearComponent } from './years/add-year/add-year.component';
import { ListYearComponent } from './years/list-year/list-year.component';
import { AddMonthComponent } from './months/add-month/add-month.component';
import { ListMonthsComponent } from './months/list-months/list-months.component';
import { AddBillTypeComponent } from './billtypes/add-bill-type/add-bill-type.component';
import { ListBillTypesComponent } from './billtypes/list-bill-types/list-bill-types.component';
import { AddBillComponent } from './bill/add-bill/add-bill.component';
import { ListBillComponent } from './bill/list-bill/list-bill.component';
import { AddFundComponent } from './funds/add-fund/add-fund.component';
import { ListFundComponent } from './funds/list-fund/list-fund.component';
import { AddMaintenanceComponent } from './maintenances/add-maintenance/add-maintenance.component';
import { ListMaintenancesComponent } from './maintenances/list-maintenances/list-maintenances.component';
import { AddEmployeeSalaryComponent } from './employeeSalary/add-employee-salary/add-employee-salary.component';
import { ListEmployeeSalariesComponent } from './employeeSalary/list-employee-salaries/list-employee-salaries.component';
import { AddOwnerComponent } from './owner/add-owner/add-owner.component';
import { AddCorpusFundComponent } from './corpusFund/add-corpus-fund/add-corpus-fund.component';
import { ListCorpusFundComponent } from './corpusFund/list-corpus-fund/list-corpus-fund.component';
import { AddMonthlyFundComponent } from './funds/add-monthly-fund/add-monthly-fund.component';
import { ListMonthlyFundComponent } from './funds/list-monthly-fund/list-monthly-fund.component';
import { ViewMonthlyFundComponent } from './funds/view-monthly-fund/view-monthly-fund.component';
import { CheckMonthlyFundComponent } from './funds/check-monthly-fund/check-monthly-fund.component';
import { AddComplaintComponent } from './complaints/add-complaint/add-complaint.component';
import { ListComplaintsComponent } from './complaints/list-complaints/list-complaints.component';
import { ViewComplaintComponent } from './complaints/view-complaint/view-complaint.component';
import { ListClosedComplaintsComponent } from './complaints/list-closed-complaints/list-closed-complaints.component';
import { AddManagementComponent } from './management/add-management/add-management.component';
import { ListManagementComponent } from './management/list-management/list-management.component';
import { SendMessageComponent } from './messages/send-message/send-message.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  imports: [     
    CommonModule,
    AngularMultiSelectModule,
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
    AdminRoutingModule,
    FlashMessagesModule
 
  ], 
  exports:[FileSelectDirective],
  declarations: [
    IndianCurrency,
      FileSelectDirective,
        AdminComponent,
      
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        DashboardComponent,
       
    
        AddOwnerComponent,
        ListOwnersComponent,
        AddFloorComponent,
        ListFloorsComponent,
        ViewFloorComponent,
        AddUnitComponent,
        ListUnitsComponent,
        ViewUnitComponent,
        AddApartmentComponent,
        ViewApartmentComponent,
        AddMemberTypeComponent,
        MemberTypeListComponent,
        AddEmployeeComponent,
        ListEmployeesComponent,
        AddYearComponent,
        ListYearComponent,
        AddMonthComponent,
        ListMonthsComponent,
        AddBillTypeComponent,
        ListBillTypesComponent,
        AddBillComponent,
        ListBillComponent,
        AddFundComponent,
        ListFundComponent,
        AddMaintenanceComponent,
        ListMaintenancesComponent,
        AddEmployeeSalaryComponent,
        ListEmployeeSalariesComponent,
        AddCorpusFundComponent,
        ListCorpusFundComponent,
        AddMonthlyFundComponent,
        ListMonthlyFundComponent,
        ViewMonthlyFundComponent,
        CheckMonthlyFundComponent,
        AddComplaintComponent,
        ListComplaintsComponent,
        ViewComplaintComponent,
        ListClosedComplaintsComponent,
        AddManagementComponent,
        ListManagementComponent,
        SendMessageComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
      ],
  providers: [AuthGuard,AdminService,FloorService,UnitService,ApartmentService,MemberTypeService]
})
export class AdminModule { }
