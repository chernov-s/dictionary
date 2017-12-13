import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// layouts
import * as fromLayouts from './layouts';
import { RouterModule, Routes } from '@angular/router';

// routes
export const ROUTES: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'words' },
	{
		path: 'words',
		loadChildren: '../words/words.module#WordsModule',
	},
];

@NgModule({
	declarations: [
		AppComponent,
		...fromLayouts.layouts
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES),
	],
	providers: [],
	exports: [...fromLayouts.layouts],
	bootstrap: [AppComponent]
})
export class AppModule { }
