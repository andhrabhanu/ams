import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';

const routes: Routes = [
	

	{
		path: 'home',
		loadChildren: 'app/home/home.module#HomeModule',
		data: { preload: true }
	  },
	{
		path: 'admin',
		loadChildren: 'app/admin/admin.module#AdminModule',
		data: { preload: true }
	},
	{
		path: 'manager',
		loadChildren: 'app/manager/manager.module#ManagerModule',
		data: { preload: true }
	  },

	
	{
	   path: '',
	   redirectTo: '/home',
	   pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent 
	}
/* 	{
		path: '',
		redirectTo: '/admin',
		pathMatch: 'full'
	 }, */
	/* {
	   path: 'person',
       loadChildren: 'app/person/person.module#PersonModule'
	},
	{
	   path: 'address',
	   component: AddressComponent
	},	
	{
	   path: '',
	   redirectTo: '/country',
	   pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent 
	} */	
];
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 