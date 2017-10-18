import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }  from './register/register.component';
import { LoginComponent }  from './login/login.component';
import { ForgotPasswordComponent }  from './forgot-password/forgot-password.component';
import { ResetPasswordComponent }  from './reset-password/reset-password.component';
import {AuthGuard} from './guards/auth.guard';

import { AdminComponent }  from './admin.component';
import { DashboardComponent }  from './dashboard/dashboard.component';

//Owner
import { AddOwnerComponent }  from './owner/add-owner/add-owner.component';
import { ListOwnersComponent }  from './owner/list-owners/list-owners.component';

//Floor
import { AddFloorComponent }  from './floors/add-floor/add-floor.component';
import { ListFloorsComponent }  from './floors/list-floors/list-floors.component';
import { ViewFloorComponent }  from './floors/view-floor/view-floor.component';

//Unit
import { AddUnitComponent }  from './units/add-unit/add-unit.component';
import { ListUnitsComponent }  from './units/list-units/list-units.component';
import { ViewUnitComponent }  from './units/view-unit/view-unit.component';

//Apartment
import { AddApartmentComponent }  from './apartment/add-apartment/add-apartment.component';
import { ViewApartmentComponent }  from './apartment/view-apartment/view-apartment.component';

//MemberType
import { AddMemberTypeComponent }  from './membertype/add-member-type/add-member-type.component';
import { MemberTypeListComponent }  from './membertype/member-type-list/member-type-list.component';

//Employee
import { AddEmployeeComponent }  from './employee/add-employee/add-employee.component';
import { ListEmployeesComponent }  from './employee/list-employees/list-employees.component';

//Management
import { AddManagementComponent }  from './management/add-management/add-management.component';
import { ListManagementComponent }  from './management/list-management/list-management.component';

//Year
import { AddYearComponent }  from './years/add-year/add-year.component';
import { ListYearComponent }  from './years/list-year/list-year.component';

//Month
import { AddMonthComponent }  from './months/add-month/add-month.component';
import { ListMonthsComponent }  from './months/list-months/list-months.component';

//BillType
import { AddBillTypeComponent }  from './billtypes/add-bill-type/add-bill-type.component';
import { ListBillTypesComponent }  from './billtypes/list-bill-types/list-bill-types.component';

//Bill
import { AddBillComponent }  from './bill/add-bill/add-bill.component';
import { ListBillComponent }  from './bill/list-bill/list-bill.component';

//Fund
import { AddFundComponent }  from './funds/add-fund/add-fund.component';
import { ListFundComponent }  from './funds/list-fund/list-fund.component';
import { AddMonthlyFundComponent }  from './funds/add-monthly-fund/add-monthly-fund.component';
import { ListMonthlyFundComponent }  from './funds/list-monthly-fund/list-monthly-fund.component';
import { CheckMonthlyFundComponent }  from './funds/check-monthly-fund/check-monthly-fund.component';


import { ViewMonthlyFundComponent }  from './funds/view-monthly-fund/view-monthly-fund.component';

//Corpus Fund
import { AddCorpusFundComponent }  from './corpusFund/add-corpus-fund/add-corpus-fund.component';
import { ListCorpusFundComponent }  from './corpusFund/list-corpus-fund/list-corpus-fund.component';

//Maintenance
import { AddMaintenanceComponent }  from './maintenances/add-maintenance/add-maintenance.component';
import { ListMaintenancesComponent }  from './maintenances/list-maintenances/list-maintenances.component';

//Message
import { SendMessageComponent }  from './messages/send-message/send-message.component';
//import { ListMaintenancesComponent }  from './maintenances/list-maintenances/list-maintenances.component';




//Employee Salary
import { AddEmployeeSalaryComponent }  from './employeeSalary/add-employee-salary/add-employee-salary.component';
import { ListEmployeeSalariesComponent }  from './employeeSalary/list-employee-salaries/list-employee-salaries.component';

//Complaint
import { AddComplaintComponent }  from './complaints/add-complaint/add-complaint.component';
import { ListComplaintsComponent }  from './complaints/list-complaints/list-complaints.component';
import { ViewComplaintComponent }  from './complaints/view-complaint/view-complaint.component';
import { ListClosedComplaintsComponent }  from './complaints/list-closed-complaints/list-closed-complaints.component';

const tenantRoutes: Routes = [
	
		{
			path: 'admin-login',
			component: LoginComponent ,
		},
		{
			path: 'admin-register',
			component: RegisterComponent 
		},
		{
			path: 'admin-forgotpassword',
			component: ForgotPasswordComponent 
		},
		{
			path: 'admin-resetpassword/:token',
			component: ResetPasswordComponent 
		},

		{

	  path: 'admin',
	component: AdminComponent,
	canActivate:[AuthGuard],
	  children: 
	  [ 
			{
				path: 'dashboard',
				component: DashboardComponent 
			},
			
			
			
			
			{
				path: 'floors',
				
				children: 
				[
					{
						path: 'add',
						component: AddFloorComponent
					},
					{
						path: 'list',
						component: ListFloorsComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'member-type',
				children: 
				[
					{
						path: 'add',
						component: AddMemberTypeComponent
					},
					{
						path: 'list',
						component: MemberTypeListComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'year',
				children: 
				[
					{
						path: 'add',
						component: AddYearComponent
					},
					{
						path: 'list',
						component: ListYearComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'month',
				children: 
				[
					{
						path: 'add',
						component: AddMonthComponent
					},
					{
						path: 'list',
						component: ListMonthsComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'billType',
				children: 
				[
					{
						path: 'add',
						component: AddBillTypeComponent
					},
					{
						path: 'list',
						component: ListBillTypesComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'bill',
				children: 
				[
					{
						path: 'add',
						component: AddBillComponent
					},
					{
						path: 'list',
						component: ListBillComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'maintenance',
				children: 
				[
					{
						path: 'add',
						component: AddMaintenanceComponent
					},
					{
						path: 'list',
						component: ListMaintenancesComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'fund',
				children: 
				[
					{
						path: 'add',
						component: AddFundComponent
					},
					{
						path: 'add-monthly',
						component: AddMonthlyFundComponent
					},
					{
						path: 'list-monthly',
						component: ListMonthlyFundComponent
					},
					{
						path: 'check-monthly',
						component: CheckMonthlyFundComponent
					},
					{
						path: 'list',
						component: ListFundComponent
					},
					{
					path: 'view-monthlyfund/:uniqId',
					component: ViewMonthlyFundComponent
					},
				] 
			},
			{
				path: 'corpus-fund',
				children: 
				[
					{
						path: 'add',
						component: AddCorpusFundComponent
					},
					{
						path: 'list',
						component: ListCorpusFundComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},

			{
				path: 'salary',
				children: 
				[
					{
						path: 'add',
						component: AddEmployeeSalaryComponent
					},
					{
						path: 'list',
						component: ListEmployeeSalariesComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			

			{
				path: 'employee',
				children: 
				[
					{
						path: 'add',
						component: AddEmployeeComponent
					},
					{
						path: 'list',
						component: ListEmployeesComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},
			{
				path: 'management',
				children: 
				[
					{
						path: 'add',
						component: AddManagementComponent
					},
				 	{
						path: 'list',
						component: ListManagementComponent
					},
					/*{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					}, */
				] 
			},
			{
				path: 'message',
				children: 
				[
					{
						path: 'send',
						component: SendMessageComponent
					},
				 	{
						path: 'list',
						component: ListManagementComponent
					},
					/*{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					}, */
				] 
			},
			{
				path: 'owners',
				children: 
				[
					{
						path: 'add',
						component: AddOwnerComponent
					},
				
					{
						path: 'list',
						component: ListOwnersComponent
					},
					{
					path: 'view-floor/:uniqId',
					component: ViewFloorComponent
					},
				] 
			},

			{
				path: 'complaints',
				children: 
				[
					{
						path: 'add',
						component: AddComplaintComponent
					},
				
					{
						path: 'list',
						component: ListComplaintsComponent
					},
					{
						path: 'list-closed',
						component: ListClosedComplaintsComponent
					},
					{
					path: 'view-complaint/:uniqId',
					component: ViewComplaintComponent
					},
				] 
			},
			{
				path: 'units',
				children: 
				[
					{
						path: 'add',
						component: AddUnitComponent
					},
					{
						path: 'list',
						component: ListUnitsComponent
					},
					{
					path: 'view-unit/:uniqId',
					component: ViewUnitComponent
					},
				] 
			},

			{
				path: 'apartment',
				children: 
				[
					{
						path: 'add',
						component: AddApartmentComponent
					},
					
					{
					path: 'view-apartment/:uniqId',
					component: ViewApartmentComponent
					},
				] 
			},
			
			
			
		]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(tenantRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule{ }
