import { NgModule } from '@angular/core';

// '@myapp/shared' 

import { HomeRoutingModule } from './routing';

import { PAGES } from './pages';
import { COMPONENTS } from './components';
import { SharedModule } from '../shared';

@NgModule({
	declarations: [
		COMPONENTS,
		PAGES
	],
	imports: [
		HomeRoutingModule,
		SharedModule
	],
	providers: [
	]
})
export class HomeModule { }
