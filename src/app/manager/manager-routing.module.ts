import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent }  from './register/register.component';
import { LoginComponent }  from './login/login.component';
import { ManagerComponent }  from './manager.component';
import { DashboardComponent }  from './dashboard/dashboard.component';

//Property
import { LeasedPropertiesComponent }  from './property/leased-properties/leased-properties.component';
import { UnLeasedPropertiesComponent }  from './property/un-leased-properties/un-leased-properties.component'
import { ViewPropertyComponent }  from './property/view-property/view-property.component';
import { AddPropertyComponent }  from './property/add-property/add-property.component';
import { EditPropertyComponent }  from './property/edit-property/edit-property.component';

import { PropertyLeasesComponent }  from './property/property-leases/property-leases.component';

//Leases
import { LeasePropertyComponent }  from './property/lease-property/lease-property.component';
import { ViewLeaseComponent }  from './property/view-lease/view-lease.component';

//Tenant
import { AddTenantComponent }  from './tenant/add-tenant/add-tenant.component';
import { LeasedTenantsComponent }  from './tenant/leased-tenants/leased-tenants.component';
import { UnLeasedTenantsComponent }  from './tenant/un-leased-tenants/un-leased-tenants.component';
import { ViewTenantComponent }  from './tenant/view-tenant/view-tenant.component';

//Service Request
import { AddRequestComponent }  from './servicerequest/add-request/add-request.component';
import { AssignRequestComponent }  from './servicerequest/assign-request/assign-request.component';
import { OpenRequestsComponent }  from './servicerequest/open-requests/open-requests.component';
import { ClosedRequestsComponent }  from './servicerequest/closed-requests/closed-requests.component';
import { ViewRequestComponent }  from './servicerequest/view-request/view-request.component';
import { EditRequestComponent }  from './servicerequest/edit-request/edit-request.component';

//Service Resource
import { AddServiceResourceComponent }  from './service-resource/add-service-resource/add-service-resource.component';
import { ResourceListComponent }  from './service-resource/resource-list/resource-list.component';
import { ViewResourceComponent }  from './service-resource/view-resource/view-resource.component';


const managerRoutes: Routes = [
	{ 
	  path: 'manager',
      component: ManagerComponent,
	  children: 
	  [ 
			{
				path: 'manager-register',
				component: RegisterComponent 
			},
			
			{
				path: 'manager-login',
				component: LoginComponent 
			},
			{
				path: 'dashboard',
				component: DashboardComponent 
			},
			//Properties
			{
				path: 'properties',
				children: [
				{
				   path: 'add',
				   component: AddPropertyComponent
				},
				{
					path: 'edit-property',
					component: EditPropertyComponent
				 },
				 {
					path: 'lease-property/:propId',
					component: LeasePropertyComponent 
				},
				{
					path: 'view-lease/:propId',
					component: ViewLeaseComponent 
				},
		       {
			       path: 'leased',
		           component: LeasedPropertiesComponent
			   },
			   {
				path: 'unleased',
				component: UnLeasedPropertiesComponent
				},
			   {
				path: 'all-leases',
				component: PropertyLeasesComponent
				},
			   {
				path: 'unleased',
				component: UnLeasedPropertiesComponent
				},
			  	 {
				path: 'view-property/:uniqId',
				  component: ViewPropertyComponent
			  	},
		   	  			   
		  		] 
				
			},
			//Tenants
			{
				path: 'tenants',
				children: [
				{
				   path: 'add',
				   component: AddTenantComponent
				},
				{
					path: 'view-tenant/:uniqId',
					  component: ViewTenantComponent
				},
				{
					path: 'leased',
					component: LeasedTenantsComponent
				 },
				 {
					path: 'unleased',
					component: UnLeasedTenantsComponent
				 },
					] 
				
			},

			//Service Providers
			{
				path: 'service-resource',
				children: [
				{
				   path: 'add',
				   component: AddServiceResourceComponent
				},
				{
					path: 'list',
					component: ResourceListComponent
				 },
				 {
					path: 'view-resource/:uniqId',
					  component: ViewResourceComponent
				},
				
				
			] 
				
			},
			//Requests

			{
				path: 'requests',
				children: [
				{
				   path: 'add',
				   component: AddRequestComponent
				},
				{
					path: 'assign-request',
					component: AssignRequestComponent
				},
				{
					path: 'view-tenant/:uniqId',
					  component: ViewTenantComponent
				},
				{
					path: 'closed',
					component: ClosedRequestsComponent
				 },
				 {
					path: 'view-request/:uniqId',
					component: ViewRequestComponent
				},
				{
					path: 'edit-request',
					component: EditRequestComponent
				},
				 {
					path: 'open',
					component: OpenRequestsComponent
				 },
			] 
				
			},

		
			
		]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(managerRoutes) ],
  exports: [ RouterModule ]
})
export class ManagerRoutingModule{ }
