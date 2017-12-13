import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// containers
import * as fromContainers from './containers';

// routes
export const ROUTES: Routes = [
	{
		path: '',
		component: fromContainers.WordsComponent,
	},
	{
		path: ':id',
		component: fromContainers.WordItemComponent,
	},
	{
		path: 'new',
		component: fromContainers.WordItemComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forChild(ROUTES),
	],
	exports: [...fromContainers.containers],
})
export class WordsModule {}
