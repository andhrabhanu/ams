import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }  from './register/register.component';
import { LoginComponent }  from './login/login.component';
import { SuperAdminComponent }  from './super-admin.component';
import { DashboardComponent }  from './dashboard/dashboard.component';


//Apartment
import { AddApartmentComponent }  from './apartment/add-apartment/add-apartment.component';
import { ViewApartmentComponent }  from './apartment/view-apartment/view-apartment.component';
import { ListApartmentsComponent }  from './apartment/list-apartments/list-apartments.component';

//Admin
import { AddAdminComponent } from './admin/add-admin/add-admin.component';

//City
import { AddCityComponent } from './cities/add-city/add-city.component';
import { ListCitiesComponent } from './cities/list-cities/list-cities.component';


const superAdminRoutes: Routes = [
	{ 
	  path: 'super-admin',
    component: SuperAdminComponent,
	  children: 
	  [ 
			{
				path: 'dashboard',
				component: DashboardComponent 
			},
			{
				path: 'register',
				component: RegisterComponent 
			},
			{
				path: 'login',
				component: LoginComponent 
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
						path: 'list',
						component: ListApartmentsComponent
					},
					
					{
					path: 'view-apartment/:uniqId',
					component: ViewApartmentComponent
					},
				] 
			},
			{
				path: 'cities',
				children: 
				[
					{
						path: 'add',
						component: AddCityComponent
					},
					{
						path: 'list',
						component: ListCitiesComponent
					},
					
					{
					path: 'view-apartment/:uniqId',
					component: ViewApartmentComponent
					},
				] 
			},
			{
				path: 'admin',
				children: 
				[
					{
						path: 'add',
						component: AddAdminComponent
					},
					
					/* {
					path: 'view-apartment/:uniqId',
					component: ViewApartmentComponent
					}, */
				] 
			},
			
			
			
			
		]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(superAdminRoutes) ],
  exports: [ RouterModule ]
})
export class SuperAdminRoutingModule{ }
